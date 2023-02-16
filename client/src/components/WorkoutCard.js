import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";

function WorkoutCard({ workout }) {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const exerciseList = workout.exercises.map((exercise) => (
    <li key={exercise.id}>{exercise.name}</li>
  ));

  const startWorkout = () => {
    fetch(`/workouts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: workout.name, id: workout.id }),
    }).then((r) => {
      if (r.ok) {
        navigate("/currentworkout");
      }
    });
  };

  return (
    <div>
    <Card className="ui container center aligned">
      <Card.Content>
        <Card.Header onClick={() => setClicked(!clicked)}>
          {workout.name}
        </Card.Header>
        <br />
        {clicked && <ul>{exerciseList}</ul>}
        <Button onClick={startWorkout}>startWorkout</Button>
      </Card.Content>
    </Card>
    </div>
  );
}

export default WorkoutCard;
