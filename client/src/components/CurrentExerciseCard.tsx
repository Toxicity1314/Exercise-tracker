import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CurrentExerciseStateIcons, { CurrentExerciseStateIconsProps, ExerciseSetState} from "./CurrentExerciseStateIcons.tsx";

type ExerciseSetProps = {
  id: number;
  weight: number;
  reps: number;
  completedAt?: Date;
}

type CurrentWorkoutCardProps = {
  id: number;
  name: string;
  exerciseSets: ExerciseSetProps[];
}

export default function CurrentWorkoutCard
  ({ id, name, exerciseSets }: CurrentWorkoutCardProps
) {

  function getLatestIncompleteExerciseSet(): ExerciseSetProps | null {
    for (let i = exerciseSets.length - 1; i >= 0; i--) {
      if (!exerciseSets[i].completedAt) {
        return exerciseSets[i];
      }
    }

    return null;
  }

  function getIconStates(): CurrentExerciseStateIconsProps[] {
    const iconStates: CurrentExerciseStateIconsProps[] = [];

    for (let i = 0; i < exerciseSets.length; i++) {
      const exerciseSet = exerciseSets[i];
      const state = exerciseSet.completedAt
        ? ExerciseSetState.COMPLETE
        : ExerciseSetState.INCOMPLETE;
      iconStates.push({
        exerciseSetId: exerciseSet.id,
        state,
      });
    }

    return iconStates;
  }

  const latestExerciseSet = getLatestIncompleteExerciseSet();
  const iconStates = getIconStates();

  return (
  <Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#e6e6e6",
          borderRadius: "50%",
          padding: "20px",
          height: "20px",
          width: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowBackIcon />
      </Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          textTransform: "Capitalize",
          width: "100%"
        }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          backgroundColor: "#e6e6e6",
          borderRadius: "50%",
          padding: "20px",
          height: "20px",
          width: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowForwardIcon />
      </Box>
    </Box>
    <Box
      sx={{
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {latestExerciseSet && 
        <div>
          <Typography
            variant="h4"
          >
            {latestExerciseSet.weight} lbs x {latestExerciseSet.reps} reps
          </Typography>
        </div>
      }
    </Box>
    <CurrentExerciseStateIcons iconStates={iconStates} />
  </Box>
  );
}