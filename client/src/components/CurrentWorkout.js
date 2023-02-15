
import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import CurrentWorkoutCard from "./CurrentWorkoutCard";

function CurrentWorkout() {
    const [currentWorkout, setCurrentWorkout] = useState([])
useEffect(()=>{
    fetch("/current_workout")
    .then((r) => {
        if (r.ok){
          r.json().then(workoutInfo => setCurrentWorkout(workoutInfo))
        }else{
          setCurrentWorkout(null)
        }
      })
},[])

const exerciseCard = currentWorkout.map(workout => <CurrentWorkoutCard key ={workout.id} workout={workout}/>)


  return (
    <header className="nav">
        {exerciseCard}
    </header>
  );
}


export default CurrentWorkout;