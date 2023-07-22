import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type CurrentWorkoutCardProps = {
  id: number;
  name: string;
}

export default function CurrentWorkoutCard
  ({ id, name }: CurrentWorkoutCardProps
) {
  return (
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
  );
}