
import React, {useState, useEffect} from "react";
import PreviousWorkoutCard from "./PreviousWorkoutCard";


function PreviousWorkoutsPage() {
  const [workouts, setWorkouts] = useState([])

  useEffect(()=>{
     fetch("/userWorkouts")
    .then(res=>res.json())
    .then(data => setWorkouts(data))
},[])
const previousWorkoutList = workouts.map(workout => <PreviousWorkoutCard key={workout.id} workout={workout}/>)


  return (
    <header className="nav">
     {previousWorkoutList}
    </header>
  );
}


export default PreviousWorkoutsPage;