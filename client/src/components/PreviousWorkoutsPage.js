import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import PreviousWorkoutCard from "./PreviousWorkoutCard";

function PreviousWorkoutsPage() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    fetch("/workouts")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);
  const updateWorkouts = (workoutToDelete) => {
    const newList = workouts.filter((workout) => {
      return workout.id !== workoutToDelete;
    });
    setWorkouts(newList);
  };

  const previousWorkoutList = workouts
    ? workouts.map((workout) => (
        <PreviousWorkoutCard
          key={workout.id}
          workout={workout}
          updateWorkouts={updateWorkouts}
        />
      ))
    : [];

  return (
    <div>
      <h1 className="header">Previous workouts</h1>
      <Grid>{previousWorkoutList}</Grid>
    </div>
  );
}

export default PreviousWorkoutsPage;
