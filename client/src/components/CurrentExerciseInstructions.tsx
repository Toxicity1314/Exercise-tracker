import React from "react";
import Typography from "@mui/material/Typography";

type CurrentExerciseInstructionsProps = {
  instructions: string;
};

export default function CurrentExerciseInstructions({
  instructions,
}: CurrentExerciseInstructionsProps) {
  // If the instructions are greater than 429 characters, add an ellipsis
  const formattedInstructions =
    instructions.length > 429
      ? instructions.slice(0, 429) + "..."
      : instructions;

  return (
    <div>
      <Typography
        variant="body1"
        sx={{
          marginLeft: "1rem",
        }}
      >
        {formattedInstructions}
      </Typography>
    </div>
  );
}
