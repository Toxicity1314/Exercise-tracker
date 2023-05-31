import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import { Card, Button } from "semantic-ui-react";
//will need to update this file to work with the new database response
function PreviousWorkoutCard({ workout, updateWorkouts }) {
  const [clicked, setClicked] = useState(false);
console.log(workout)
  const exerciseList = workout.exercise_sets.map((exercise_set) => {
    return (
      <li key={exercise_set.id}>
        {exercise_set.exercise.name}
        <ul>
          <li>{`${exercise_set.reps} sets at ${exercise_set.weight} lbs for 4 sets`}</li>
          <li>{`successful? ${exercise_set.successful}`}</li>
        </ul>
      </li>
    );
  });

  const handleDelete = () => {
    fetch(`/workouts/${workout.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        updateWorkouts(workout.id);
      } else {
        r.json().then((err) => console.log("handle errors here"));
      }
    });
  };

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
            <Button color="red" onClick={handleDelete}>
              {" "}
              delete
            </Button>
          </Card.Content>
        </Card>
      </Grid.Column>
    </div>
  );
}

export default PreviousWorkoutCard;
