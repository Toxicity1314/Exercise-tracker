import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type SetSelectorModalProps = {
  setId: number;
  currentRepAmount: number;
  currentWeightAmount: number;
  open: boolean;
  onModalCancel: () => void;
  onModalSave: (setId: number, weight: number, reps: number) => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

enum Action {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export default function EditSetModal({
  setId,
  currentRepAmount,
  currentWeightAmount,
  open,
  onModalCancel,
  onModalSave,
}: SetSelectorModalProps) {
  const [reps, setReps] = useState(currentRepAmount);
  const [weight, setWeight] = useState(currentWeightAmount);

  const changeReps = (action: Action) => {
    if (action === Action.INCREMENT) {
      setReps((prevReps) => prevReps + 1);
    } else {
      if (reps > 0) {
        setReps((prevReps) => prevReps - 1);
      }
    }
  };

  const changeWeight = (action: Action) => {
    if (action === Action.INCREMENT) {
      setWeight((prevWeight) => prevWeight + 1);
    } else {
      if (weight > 0) {
        setWeight((prevWeight) => prevWeight - 1);
      }
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onModalCancel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{
              textTransform: "capitalize",
              borderBottom: "1px solid #e6e6e6",
            }}
            textAlign="center"
          >
            How would you like to change your set?
          </Typography>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography
              variant="h5"
              sx={{
                paddingTop: "1rem",
                paddingBottom: "0.5rem",
              }}
            >
              Weight
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{ fontSize: "2rem" }}
                onClick={() => changeWeight(Action.DECREMENT)}
              >
                -
              </Button>
              <Typography
                sx={{
                  px: "2rem",
                  fontSize: "2rem",
                }}
              >
                {weight}
              </Typography>
              <Button
                variant="contained"
                sx={{ fontSize: "2rem" }}
                onClick={() => changeWeight(Action.INCREMENT)}
              >
                +
              </Button>
            </Box>
            <Typography
              variant="h5"
              sx={{
                paddingTop: "2rem",
                paddingBottom: "0.5rem",
              }}
            >
              Reps
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{ fontSize: "2rem" }}
                onClick={() => changeReps(Action.DECREMENT)}
              >
                -
              </Button>
              <Typography
                sx={{
                  px: "2rem",
                  fontSize: "2rem",
                }}
              >
                {reps}
              </Typography>
              <Button
                variant="contained"
                sx={{ fontSize: "2rem" }}
                onClick={() => changeReps(Action.INCREMENT)}
              >
                +
              </Button>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            sx={{
              marginTop: "2rem",
            }}
          >
            <Button
              variant="contained"
              sx={{
                mt: 2,
                width: "30%",
              }}
              onClick={() => onModalSave(setId, weight, reps)}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                width: "30%",
              }}
              onClick={onModalCancel}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
