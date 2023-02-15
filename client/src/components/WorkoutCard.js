
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";


function WorkoutCard({workout}) {
    const [clicked, setClicked] = useState(false)
    const navigate = useNavigate()

    const exerciseList = workout.exercises.map(exercise => <li key={exercise.id}>{exercise.name}</li>)

    const startWorkout = ()=>{
        const exercises = workout.exercises.map(exercise =>{
            return {workout_id: workout.id, exercise_id: exercise.id}
        }) 
            fetch("/user_exercises",{
                method: "POST",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(exercises)            
            })
            .then(r =>{
                if (r.ok){
                navigate("/currentworkout")
                }
            })
    }

  return (
<Card className="ui container center aligned" >
      <Card.Content>
        <Card.Header onClick={()=>setClicked(!clicked)}>
          {workout.name}
        </Card.Header>
        <br />
        {clicked && (
            <ul>
          {exerciseList}
          </ul>
        )} 
        <Button onClick={startWorkout}>
          startWorkout
        </Button>
      </Card.Content>
    </Card>
  );
}


export default WorkoutCard;