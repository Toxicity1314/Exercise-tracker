import React from "react";
import Box from "@mui/material/Box";

export enum ExerciseSetState {
  INCOMPLETE = "INCOMPLETE",
  COMPLETE = "COMPLETE",
  FAILED = "FAILED",
}

export type CurrentExerciseStateIconsProps = {
  exerciseSetId: number;
  state: ExerciseSetState;
}

export default function CurrentExerciseStateIcons(props: { iconStates: CurrentExerciseStateIconsProps[] }) { // Use the correct prop type and name
  const { iconStates } = props;

  if (!iconStates) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {iconStates.map((exerciseSet) => {
        let backgroundColor;
        switch (exerciseSet.state) {
          case ExerciseSetState.INCOMPLETE:
            backgroundColor = "lightgrey";
            break;
          case ExerciseSetState.COMPLETE:
            backgroundColor = "green";
            break;
          case ExerciseSetState.FAILED:
            backgroundColor = "yellow";
            break;
          default:
            backgroundColor = "transparent";
        }

        return (
          <Box
            key={exerciseSet.exerciseSetId}
            sx={{
              backgroundColor,
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              margin: "8px",
            }}
          />
        );
      })}
    </Box>
  );
}