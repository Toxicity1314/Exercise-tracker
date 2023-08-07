import React, { useEffect, useState, useCallback } from "react";
import { CurrentWorkout } from "./types.ts";
import { translateRawCurrentWorkout } from "./translator.ts";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CurrentExerciseCard from "./CurrentExerciseCard.tsx";
import CompleteWorkoutModal from "./CompleteWorkoutModal.tsx";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";
import SwipeableViews from "react-swipeable-views";

export default function CurrentWorkoutPage() {
  const [currentWorkout, setCurrentWorkout] = useState<CurrentWorkout | null>(
    null
  );
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState<number>(0);
  const [isExerciseComplete, setIsExerciseComplete] = useState<boolean>(false);

  // Used for the slide animation
  const containerRef = React.useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentWorkout) {
      return;
    }

    fetchCurrentWorkout();
  });

  const hasCompletedWorkout = useCallback((): boolean => {
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
  }, [currentWorkout]);

  useEffect(() => {
    if (!currentWorkout) {
      return;
    }

    if (hasCompletedWorkout()) {
      setIsExerciseComplete(true);
    }
  }, [currentWorkout, hasCompletedWorkout]);

  const nextExercise = useCallback(() => {
    if (!currentWorkout) {
      return;
    }

    if (currentExerciseIndex + 1 >= currentWorkout.exercises.length) {
      setCurrentExerciseIndex(0);
    } else {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  }, [currentWorkout, currentExerciseIndex]);

  useEffect(() => {
    if (!currentWorkout) {
      return;
    }

    // Are all the sets completed for this current index?
    const currentExercise = currentWorkout.exercises[currentExerciseIndex];
    const allSetsCompleted = currentExercise.exerciseSets.every(
      (exerciseSet) => exerciseSet.completedAt
    );

    if (allSetsCompleted) {
      // Call the nextExercise function
      nextExercise();
    }
  }, [currentWorkout, currentExerciseIndex, nextExercise]);

  async function fetchCurrentWorkout() {
    const response = await fetch("/current_workout");

    const data = await response.json();

    const currentWorkout = translateRawCurrentWorkout(data);

    setCurrentWorkout(currentWorkout);
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
      await fetchCurrentWorkout();
    } else {
      alert("Something went wrong!");
    }
  }

  async function editSet(setId: number, weight: number, reps: number) {
    const response = await fetch(`/exercise_sets/${setId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        weight,
        reps,
        completed_at: new Date().toISOString(),
      }),
    });

    if (response.ok) {
      await fetchCurrentWorkout();
    } else {
      alert("Something went wrong!");
    }
  }

  function completeExercise(): void {
    navigate("/blueprints");
  }

  if (!currentWorkout) {
    return null;
  }

  return (
    <Container
      maxWidth="sm"
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
      <Box
        ref={containerRef}
        sx={{
          marginTop: "2rem",
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
          width: "30rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SwipeableViews index={currentExerciseIndex}>
          {currentWorkout.exercises.map((exercise) => (
            <CurrentExerciseCard
              key={exercise.id}
              id={exercise.id}
              name={exercise.name}
              instructions={exercise.instructions}
              exerciseSets={exercise.exerciseSets}
              completeSet={completeSet}
              editSet={editSet}
            />
          ))}
        </SwipeableViews>
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
      <CompleteWorkoutModal
        open={isExerciseComplete}
        onModalClose={completeExercise}
      />
    </Container>
  );
}
