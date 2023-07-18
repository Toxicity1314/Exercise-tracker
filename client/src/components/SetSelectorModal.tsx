import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type SetSelectorModalProps = {
  title: string;
  open: boolean;
  onClose: () => void;
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

export default function SetSelectorModal({
  open,
  onClose,
  title,
}: SetSelectorModalProps) {
  const [sets, setSets] = useState(3);

  const handleIncrement = () => {
    setSets((prevSets) => prevSets + 1);
  };

  const handleDecrement = () => {
    if (sets > 0) {
      setSets((prevSets) => prevSets - 1);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
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
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            How many sets?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{ fontSize: "2rem" }}
              onClick={handleDecrement}
            >
              -
            </Button>
            <Typography
              sx={{
                px: "2rem",
                fontSize: "2rem",
              }}
            >
              {sets}
            </Typography>
            <Button
              variant="contained"
              sx={{ fontSize: "2rem" }}
              onClick={handleIncrement}
            >
              +
            </Button>
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
              onClick={onClose}
            >
              Start
            </Button>
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                width: "30%",
              }}
              onClick={onClose}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
