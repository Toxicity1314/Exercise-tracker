import React, { useState } from "react";
import { Card, Button, Grid } from "semantic-ui-react";

function CurrentWorkoutCard({ exercise }) {
  const [successClicked, setSuccessClicked] = useState(); //reps.successful
  let { reps, instructions, name, pic_url, id } = exercise;
  const handleSuccess = (e) => {
    const success = e.target.value ? true : false;
    fetch(`/reps/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ successful: success }),
    }).then((r) => {
      if (r.ok) {
        setSuccessClicked(success);
        reps.successful = success;
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
            <h4 className="header">{`${reps.weight} lbs x ${reps.quantity} reps 4 sets`}</h4>
            <div>{instructions}</div>
            {successClicked ? (
              <Button
                floated="left"
                color="blue"
                value="successful"
                onClick={handleSuccess}
              >
                successful
              </Button>
            ) : (
              <Button floated="left" value="successful" onClick={handleSuccess}>
                successful
              </Button>
            )}
            {successClicked ? (
              <Button floated="right" value="" onClick={handleSuccess}>
                Unsuccessful
              </Button>
            ) : (
              <Button
                floated="right"
                value=""
                color="blue"
                onClick={handleSuccess}
              >
                Unsuccessful
              </Button>
            )}
          </Card.Content>
        </Card>
      </Grid.Column>
    </div>
  );
}

export default CurrentWorkoutCard;
