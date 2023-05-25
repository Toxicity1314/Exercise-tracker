import React, { useState } from "react";
import { Card, Button, Grid } from "semantic-ui-react";

function CurrentWorkoutCardExerciseSet({ set }) {
  const [currentSet, setCurrentSet] = useState(set)
  const [successClicked, setSuccessClicked] = useState(currentSet.completed_at); //sets.successful
  // console.log(set)
  
  const handleSuccess = (e) => {
    // setSuccessClicked(e.target.value ? Date.now() : null)
    // set.completed_at = successClicked
    // console.log(set)
    let newCompletedAt = e.target.value ? new Date().toISOString() : null
    console.log(newCompletedAt)
    fetch(`/exercise_sets/${currentSet.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed_at: newCompletedAt }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data)=>{
          console.log(data)
          setCurrentSet(data)
          setSuccessClicked(data.completed_at)


        })
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
            <br />
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

export default CurrentWorkoutCardExerciseSet;
