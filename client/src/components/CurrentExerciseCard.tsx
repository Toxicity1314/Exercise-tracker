import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CurrentExerciseStateIcons, { CurrentExerciseStateIconsProps, ExerciseSetState} from "./CurrentExerciseStateIcons.tsx";
import Button from "@mui/material/Button";
import CompleteSetButton from "./CompleteSetButton.tsx";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@mui/material";

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
  nextExercise: () => void;
  previousExercise: () => void;
}

export default function CurrentWorkoutCard
  ({ id, name, exerciseSets, nextExercise, previousExercise }: CurrentWorkoutCardProps
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
    </Box>
    {latestExerciseSet && 
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Typography
          variant="h4"
        >
          {latestExerciseSet.weight} lbs x {latestExerciseSet.reps} reps
        </Typography>
      </Box>
    }
    <Box
      sx={{
        marginTop: "2rem",
        marginBottom: "2rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
      }}
    >
      <IconButton
        onClick={previousExercise}
        sx={{
          backgroundColor: "#e6e6e6",
          padding: "20px",
        }}
      >
        <ArrowBackIcon 
          sx={{
            fontSize: "2rem"
          }}
        />
      </IconButton>
      <CompleteSetButton />
      <IconButton
        onClick={nextExercise}
        sx={{
          backgroundColor: "#e6e6e6",
          padding: "20px",
        }}
      >
        <ArrowForwardIcon 
          sx={{
            fontSize: "2rem"
          }}
        />
      </IconButton>
    </Box>
    <CurrentExerciseStateIcons iconStates={iconStates} />
  </Box>
  );
}