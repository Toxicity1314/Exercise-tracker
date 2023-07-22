import React, { useEffect, useState } from "react";
import { RawCurrentWorkout, CurrentWorkout } from "./types.ts";
import { translateRawCurrentWorkout } from "./translator.ts";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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

      console.log(currentWorkout)
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
            variant="h4"
            sx={{
              textAlign: "center",
              textTransform: "Capitalize",
              width: "100%"
            }}
          >
            {currentWorkout.name}
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
        <Typography
          component="h3"
        >
          Something
        </Typography>
      </Box>
    </Container>
  );
}
