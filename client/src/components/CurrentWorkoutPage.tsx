import React, { useEffect, useState } from "react";
import { RawCurrentWorkout, CurrentWorkout } from "./types.ts";
import { translateRawCurrentWorkout } from "./translator.ts";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CurrentExerciseCard from "./CurrentExerciseCard.tsx";
import CompleteWorkoutModal from "./CompleteWorkoutModal.tsx";

export default function CurrentWorkoutPage() {
  const [currentWorkout, setCurrentWorkout] = useState<CurrentWorkout | null>(
    null
  );
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState<number>(0);

  useEffect(() => {
    if (currentWorkout) {
      return;
    }

    fetchCurrentWorkout();
  });

  async function fetchCurrentWorkout() {
    const response = await fetch("/current_workout");

    const data = await response.json();

    const currentWorkout = translateRawCurrentWorkout(data);

    setCurrentWorkout(currentWorkout);
  }

  function nextExercise() {
    if (!currentWorkout) {
      return;
    }

    if (currentExerciseIndex + 1 >= currentWorkout.exercises.length) {
      setCurrentExerciseIndex(0);
    } else {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  }

  function previousExercise() {
    if (!currentWorkout) {
      return;
    }

    if (currentExerciseIndex - 1 < 0) {
      setCurrentExerciseIndex(currentWorkout.exercises.length - 1);
    } else {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
    }
  }

  async function completeSet(setId: number) {
    const response = await fetch(`/exercise_sets/${setId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed_at: new Date().toISOString() }),
    });

    if (response.ok) {
      fetchCurrentWorkout();
    } else {
      alert("Something went wrong!");
    }
  }

  function completeExercise(): boolean {
    if (!currentWorkout) {
      return false;
    }

    // If all sets have a completedAt under all exercises, then the workout is complete
    for (let i = 0; i < currentWorkout.exercises.length; i++) {
      const exercise = currentWorkout.exercises[i];

      for (let j = 0; j < exercise.exerciseSets.length; j++) {
        const exerciseSet = exercise.exerciseSets[j];

        if (!exerciseSet.completedAt) {
          return false;
        }
      }
    }

    return true;
  }

  if (!currentWorkout) {
    return null;
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: "2rem",
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CurrentExerciseCard
          id={currentWorkout.exercises[currentExerciseIndex].id}
          name={currentWorkout.exercises[currentExerciseIndex].name}
          exerciseSets={
            currentWorkout.exercises[currentExerciseIndex].exerciseSets
          }
          nextExercise={nextExercise}
          previousExercise={previousExercise}
          completeSet={completeSet}
        />
      </Box>
    </Container>
  );
}
