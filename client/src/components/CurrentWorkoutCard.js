import React, { useState } from "react";
import { Card, Button, Grid } from "semantic-ui-react";
import CurrentWorkoutCardExerciseSet from "./CurrentWorkoutCardExerciseSet";

function CurrentWorkoutCard({ exercise }) {
  //console.log(exercise)
  
  let { exercise_sets, instructions, name, pic_url, id } = exercise;
  console.log(instructions)
  let exercise_set_buttons = exercise_sets.map(set => <CurrentWorkoutCardExerciseSet key={set.id} set={set}/>)

  return (
    <div className="nav">
      <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>
              <h2 className="header">{name}</h2>
            </Card.Header>
            <br />
            <h4 className="header">{`${exercise_sets[0].weight} lbs x ${exercise_sets[0].reps} sets 4 sets`}</h4>
            <div>{instructions}</div>
            <div>{exercise_set_buttons}</div>

          </Card.Content>
        </Card>
      </Grid.Column>
    </div>
  );
}

export default CurrentWorkoutCard;
