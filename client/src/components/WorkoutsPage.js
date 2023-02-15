
import React, {useState, useEffect} from "react";
import WorkoutCard from "./WorkoutCard";


function WorkoutsPage() {
  const [workouts, setWorkouts] = useState([])

  useEffect(()=>{
     fetch("/workouts")
    .then(res=>res.json())
    .then(data => setWorkouts(data))
},[])
const workoutList = workouts.map(workout => <WorkoutCard key={workout.id} workout={workout}/>)


  return (
    <header className="nav">
     {workoutList}
    </header>
  );
}


export default WorkoutsPage;