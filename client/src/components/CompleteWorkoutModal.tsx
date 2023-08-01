import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type CompleteWorkoutModalProps = {
  open: boolean;
  onModalClose: () => void;
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

export default function CompleteWorkoutModal({
  open,
  onModalClose,
}: CompleteWorkoutModalProps) {
  
  return (
    <div>
      <Modal
        open={open}
        onClose={onModalClose}
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
            Completed Workout!
          </Typography>

          <Box
            sx={{
              display: "flex",
              marginTop: "2rem",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                mt: 2,
                width: "30%",
              }}
              onClick={onModalClose}
            >
              Finish
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
