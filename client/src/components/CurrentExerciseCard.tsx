import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CurrentExerciseStateIcons, {
  CurrentExerciseStateIconsProps,
  ExerciseSetState,
} from "./CurrentExerciseStateIcons.tsx";
import CompleteSetButton from "./CompleteSetButton.tsx";
import IconButton from "@mui/material/IconButton";
import EditSetModal from "./EditSetModal.tsx";

type ExerciseSetProps = {
  id: number;
  weight: number;
  reps: number;
  completedAt?: Date;
};

type CurrentWorkoutCardProps = {
  id: number;
  name: string;
  instructions: string;
  exerciseSets: ExerciseSetProps[];
  nextExercise: () => void;
  previousExercise: () => void;
  completeSet: (setId: number) => void;
};

export default function CurrentWorkoutCard({
  id,
  name,
  instructions,
  exerciseSets,
  nextExercise,
  previousExercise,
  completeSet,
}: CurrentWorkoutCardProps) {
  const [openEditModal, setOpenEditModal] = React.useState(false);

  function getEarliestIncompleteSet(): ExerciseSetProps {
    for (let i = 0; i < exerciseSets.length; i++) {
      const exerciseSet = exerciseSets[i];
      if (!exerciseSet.completedAt) {
        return exerciseSet;
      }
    }

    // If all sets are complete just return the list in the list
    return exerciseSets[exerciseSets.length - 1];
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

  async function editSet(): Promise<void> {
    console.log(JSON.stringify(exerciseSet))

    setOpenEditModal(true);
  }

  function cancelEditSet(): void {
    setOpenEditModal(false);
  }

  async function saveEditSet(input: { weight: number, reps: number }): Promise<void> {
    setOpenEditModal(false);
  }

  const exerciseSet = getEarliestIncompleteSet();
  const iconStates = getIconStates();

  if (!exerciseSet) {
    return null;
  }

  return (
    <Box
      key={id}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
    <Box
      sx={{
        paddingRight: "1rem",
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
            fontSize: "2rem",
          }}
        />
      </IconButton>
    </Box>
    <Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "0.5rem",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            textTransform: "Capitalize",
            width: "100%",
            marginBottom: "0.5rem",
          }}
        >
          {name}
        </Typography>
        <Typography variant="h4" sx={{ marginBottom: "0.5rem" }}>
          {exerciseSet.weight} lbs x {exerciseSet.reps} reps
        </Typography>
        <Typography variant="body1" sx={{ 
          marginLeft: "1rem" 
        }}>
          {instructions}
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "4rem",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <CompleteSetButton
          completeSet={completeSet}
          exerciseSetId={exerciseSet.id}
          editSet={editSet}
        />
      </Box>
      <CurrentExerciseStateIcons iconStates={iconStates} />
      </Box>
      <Box
        sx={{
          paddingLeft: "1rem",
        }}
      >
        <IconButton
            onClick={nextExercise}
            sx={{
              backgroundColor: "#e6e6e6",
              padding: "20px",
            }}
          >
            <ArrowForwardIcon
              sx={{
                fontSize: "2rem",
              }}
            />
        </IconButton>
      </Box>
      <EditSetModal 
        currentRepAmount={exerciseSet.reps}
        currentWeightAmount={exerciseSet.weight}
        open={openEditModal}
        onModalCancel={cancelEditSet}
        onModalSave={saveEditSet}
      />
    </Box>
  );
}
