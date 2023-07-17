import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

export type BlueprintCardProps = {
  id: number;
  name: string;
  exercises: {
    id: number;
    name: string;
  }[];
};

export default function BlueprintCard({
  id,
  name,
  exercises,
}: BlueprintCardProps) {

  return (
    <Box
      sx={{
        width: "240px",
        height: "240px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          margin: ".75rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            textTransform: "Capitalize",
          }}
        >
          {name.split(" ").join(" - ")}
        </Typography>
      </Box>
      <Divider
        sx={{
          marginLeft: "10%",
          marginRight: "10%",
        }}
      />
      <List
        sx={{
          flexGrow: 1,
        }}
      >
        {exercises.map((exercise) => (
          <ListItem
            key={exercise.id}
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                width: "100%",
                textAlign: "center",
                textTransform: "Capitalize",
              }}
            >
              {exercise.name.length >= 28
                ? exercise.name.substring(0, 25).trimEnd() + "..." // Display the first 25 characters plus ellipsis
                : exercise.name}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
