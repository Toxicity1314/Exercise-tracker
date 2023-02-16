import React, { useState} from "react";
import { Grid } from "semantic-ui-react";
import { Card, Button } from "semantic-ui-react";

function PreviousWorkoutCard({ workout, updateWorkouts }) {
  const [clicked, setClicked] = useState(false);

  const exerciseList = workout.reps.map((rep) => {
    return (
      <li key={rep.id}>
        {rep.exercise.name}
        <ul>
          <li>{`${rep.quantity} reps at ${rep.weight} lbs for 4 sets`}</li>
          <li>{`successful? ${rep.successful}`}</li>
        </ul>
      </li>
    );
  });

  const handleDelete = () =>{
    fetch(`/workouts/${workout.id}`, {
        method: "DELETE"
      })
      .then((r) => {
        if (r.ok){
          updateWorkouts(workout.id)
        }else{
            r.json().then(err => console.log)
        }
      }) 
  }

  return (
    <div className="nav">
      <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header onClick={() => setClicked(!clicked)}>
              <h1>{workout.name}</h1>
              {`completed on ${workout.completed_at}`}
            </Card.Header>
            <br />
            {clicked && <ul>{exerciseList}</ul>}
            <Button color="red" onClick={handleDelete}> delete</Button>
          </Card.Content>
        </Card>
      </Grid.Column>
    </div>
  );
}

export default PreviousWorkoutCard;
