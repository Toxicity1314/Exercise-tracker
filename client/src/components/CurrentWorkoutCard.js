import React, { useState } from "react";
import { Card, Button, Grid } from "semantic-ui-react";

function CurrentWorkoutCard({ exercise }) {
  console.log(exercise)
  const [successClicked, setSuccessClicked] = useState(); //sets.successful
  let { exercise_sets, instructions, name, pic_url, id } = exercise;
  const handleSuccess = (e) => {
    const success = e.target.value ? true : false;
    fetch(`/exercise_sets/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ successful: success }),
    }).then((r) => {
      if (r.ok) {
        setSuccessClicked(success);
        exercise_sets.successful = success;
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
            <Card.Header>
              <h2 className="header">{name}</h2>
            </Card.Header>
            <br />
            <h4 className="header">{`${exercise_sets[0].weight} lbs x ${exercise_sets[0].reps} sets 4 sets`}</h4>
            <div>{instructions}</div>
            {successClicked ? (
              <Button
                floated="left"
                color="blue"
                value="successful"
                onClick={handleSuccess}
              >
                Set Completed
              </Button>
            ) : (
              <Button floated="left" value="successful" onClick={handleSuccess}>
                Set Completed
              </Button>
            )}
            {successClicked ? (
              <Button floated="right" value="" onClick={handleSuccess}>
                Set Unsuccessful
              </Button>
            ) : (
              <Button
                floated="right"
                value=""
                color="blue"
                onClick={handleSuccess}
              >
                Set Unsuccessful
              </Button>
            )}
          </Card.Content>
        </Card>
      </Grid.Column>
    </div>
  );
}

export default CurrentWorkoutCard;
