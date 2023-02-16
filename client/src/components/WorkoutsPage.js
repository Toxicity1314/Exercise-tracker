
import React, {useState, useEffect} from "react";
import WorkoutCard from "./WorkoutCard";
import { Grid } from "semantic-ui-react";


function WorkoutsPage() {
  const [workouts, setWorkouts] = useState([])

  useEffect(()=>{
     fetch("/blueprints")
    .then(res=>res.json())
    .then(data => setWorkouts(data))
},[])
const workoutList = workouts.map(workout => <WorkoutCard key={workout.id} workout={workout}/>)


  return (
    <div>
      <h1 className="header"> Please Select A Workout</h1>
      <Grid>
     {workoutList}
     </Grid>
    </div>
  );
}


export default WorkoutsPage;