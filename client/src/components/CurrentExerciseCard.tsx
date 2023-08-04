import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CurrentExerciseStateIcons, {
  CurrentExerciseStateIconsProps,
  ExerciseSetState,
} from "./CurrentExerciseStateIcons.tsx";
import CompleteSetButton from "./CompleteSetButton.tsx";
import EditSetModal from "./EditSetModal.tsx";
import CurrentExerciseInstructions from "./CurrentExerciseInstructions.tsx";

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
  completeSet: (setId: number) => void;
  editSet(setId: number, weight: number, reps: number): void;
};

export default function CurrentWorkoutCard({
  id,
  name,
  instructions,
  exerciseSets,
  completeSet,
  editSet,
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

  async function openEditSetModal(): Promise<void> {
    setOpenEditModal(true);
  }

  function cancelEditSet(): void {
    setOpenEditModal(false);
  }

  function saveEditSet(setId: number, weight: number, reps: number): void {
    editSet(setId, weight, reps);

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
              height: "8rem",
            }}
          >
            {name}
          </Typography>
          <Typography variant="h4" sx={{ marginBottom: "0.5rem" }}>
            {exerciseSet.weight} lbs x {exerciseSet.reps} reps
          </Typography>
          <CurrentExerciseInstructions instructions={instructions} />
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
            editSet={openEditSetModal}
          />
        </Box>
        <CurrentExerciseStateIcons iconStates={iconStates} />
      </Box>
      <EditSetModal
        setId={exerciseSet.id}
        currentRepAmount={exerciseSet.reps}
        currentWeightAmount={exerciseSet.weight}
        open={openEditModal}
        onModalCancel={cancelEditSet}
        onModalSave={saveEditSet}
      />
    </Box>
  );
}
