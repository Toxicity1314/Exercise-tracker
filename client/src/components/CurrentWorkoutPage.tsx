import React, { useEffect, useState } from "react";
import { RawCurrentWorkout, CurrentWorkout } from "./types.ts";
import { translateRawCurrentWorkout } from "./translator.ts";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CurrentExerciseCard from "./CurrentExerciseCard.tsx";

export default function CurrentWorkoutPage() {
  const [currentWorkout, setCurrentWorkout] = useState<CurrentWorkout | null>(null);

  useEffect(() => {
    if (currentWorkout) {
      return;
    }

    async function fetchCurrentWorkout() {
      const response = await fetch("/current_workout");

      const data = await response.json();

      const currentWorkout = translateRawCurrentWorkout(data);

      setCurrentWorkout(currentWorkout);

      console.log(data)
    }

    fetchCurrentWorkout();
  });

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
          id={currentWorkout.exercises[0].id}
          name={currentWorkout.exercises[0].name}
          exerciseSets={currentWorkout.exercises[0].exerciseSets}
        />
      </Box>
    </Container>
  );
}
