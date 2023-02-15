
import React, { useEffect, useState } from "react";
import { Card, Button } from "semantic-ui-react";

function CurrentWorkoutCard({workout}) {
    const {weight, reps, success, exercise} = workout
// console.log(exercise)
// console.log(weight)
// console.log(reps)
// console.log(success)
console.log(workout)

  return (
    <div className="nav">
        <Card className="ui container center aligned" >
            <Card.Content>
                <Card.Header>
                    {exercise.name}
                </Card.Header>               
                <br />
                <div>{`${weight} lbs x ${reps} reps`}</div>
                <div>{exercise.instructions}</div>
                <Button>success?</Button>
                <Button>success?</Button>
                <Button>success?</Button>
                <Button>success?</Button>
            </Card.Content>
        </Card>
    </div>
  );
}


export default CurrentWorkoutCard;