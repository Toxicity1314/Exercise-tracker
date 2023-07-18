import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BlueprintCard, { BlueprintCardProps } from "./BlueprintCard.tsx";
import Typography from "@mui/material/Typography";
import SetSelectorModal from "./SetSelectorModal.tsx";
import { useNavigate } from "react-router-dom";

type BlueprintsResponse = {
  id: number;
  name: string;
  exercises: {
    id: number;
    name: string;
    blueprint_id: number;
    instructions: string;
    pic_url?: string;
  }[];
};

export default function BlueprintSelection() {
  const [blueprints, setBlueprints] = useState<BlueprintCardProps[]>([]);
  const [selectedBlueprint, setSelectedBlueprint] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBlueprints() {
      if (blueprints.length === 0) {
        const response = await fetch("/blueprints");
        const data: BlueprintsResponse[] = await response.json();

        const blueprints = data.map((blueprint) => ({
          id: blueprint.id,
          name: blueprint.name,
          exercises: blueprint.exercises.map((exercise) => ({
            id: exercise.id,
            name: exercise.name,
          })),
        }));

        setBlueprints(blueprints);
      }
    }

    fetchBlueprints();
  });

  const handleSelectBlueprint = (selectedBlueprint: {
    id: number;
    name: string;
  }) => {
    setSelectedBlueprint(selectedBlueprint);
    setIsModalOpen(true);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleModalStart = async (sets: number, blueprintId: number) => {
    setIsModalOpen(false);

    const response = await fetch("/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: blueprintId,
        sets,
      }),
    });

    if (response.ok) {
      navigate("/currentworkout");
    }
  };

  if (!blueprints) return null;

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: "1rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Select a Workout
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: "3rem",
            border: "1px solid #e6e6e6",
            backgroundColor: "#e6e6e6",
            borderRadius: "8px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          {/* Map over Blueprints, display workout */}
          {blueprints.map((blueprint) => (
            <Box onClick={() => handleSelectBlueprint(blueprint)}>
              <BlueprintCard
                key={blueprint.id}
                id={blueprint.id}
                name={blueprint.name}
                exercises={blueprint.exercises}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <SetSelectorModal
        title={selectedBlueprint?.name.split(" ").join(" - ") || ""}
        open={isModalOpen}
        blueprintId={selectedBlueprint?.id || 0}
        onModalCancel={handleModalCancel}
        onModalStart={handleModalStart}
      />
    </Container>
  );
}
