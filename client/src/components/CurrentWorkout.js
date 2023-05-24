import React, { useEffect, useState } from "react";
import { Grid, Button, Segment } from "semantic-ui-react";
import CurrentWorkoutCard from "./CurrentWorkoutCard";

function CurrentWorkout() {
  const [currentWorkout, setCurrentWorkout] = useState(null);
  useEffect(() => {
    fetch("/current_workout").then((r) => {
      if (r.ok) {
        r.json().then((workoutInfo) => setCurrentWorkout(workoutInfo));
      } else {
        setCurrentWorkout(null);
      }
    });
  }, []);
  console.log(currentWorkout)
  let exerciseCard = [];
  if (currentWorkout) {
    console.log(currentWorkout)
    exerciseCard = currentWorkout.exercises.map((exercise) => (
      <CurrentWorkoutCard key={exercise.id} exercise={exercise} />
    ));
  }
  const handleCompleted = () => {
    fetch(`/workouts/${currentWorkout.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed_at: Date() }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((workoutInfo) => setCurrentWorkout(null));
      } else {
        r.json().then((err) => console.log("handle errors here"));
      }
    });
  };
  const handleDelete = () => {
    fetch(`/workouts/${currentWorkout.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setCurrentWorkout(null);
      } else {
        r.json().then((err) => console.log("handle errors here"));
      }
    });
  };

  if (!currentWorkout) {
    return (
      <h1>
        Congrats on finishing your previous workout!! please select another from
        the workouts selection tab when ready
      </h1>
    );
  }

  return (
    <div>
      <h1 className="header">{currentWorkout.name}</h1>
      <Grid>{exerciseCard}</Grid>
      <Segment basic textAlign={"center"}>
        <Button style={{ textAlign: "center" }} onClick={handleCompleted}>
          completed
        </Button>
        <Button
          style={{ textAlign: "center" }}
          color="red"
          onClick={handleDelete}
        >
          Delete current workout
        </Button>
      </Segment>
    </div>
  );
}

export default CurrentWorkout;
