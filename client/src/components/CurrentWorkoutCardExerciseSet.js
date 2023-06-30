import React, { useState } from "react";
import { Card, Button, Grid } from "semantic-ui-react";

function CurrentWorkoutCardExerciseSet({ set }) {
  const [currentSet, setCurrentSet] = useState(set)
  const [successClicked, setSuccessClicked] = useState(currentSet.completed_at); //sets.successful
  
  const handleSuccess = (e) => {
    console.log(e.target.value)
    let newCompletedAt = e.target.value ? new Date().toISOString() : null
    fetch(`/exercise_sets/${currentSet.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed_at: newCompletedAt }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data)=>{
          console.log(data)
          setCurrentSet(data)
          setSuccessClicked(e.target.value)
        })
      } else {
        r.json().then((err) => console.log(err));
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
                // onClick={handleSuccess}
              >
                Set Completed
              </Button>
            ) : ( 
              <Button floated="left" value={new Date().toISOString()} onClick={handleSuccess}>
                Set Completed
              </Button>
            )}
            {successClicked === null || successClicked? (
              <Button floated="right" value="" onClick={handleSuccess}>
                Set Unsuccessful
              </Button>
            ) : (
              <Button
                floated="right"
                value={null}
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
