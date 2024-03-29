import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function NavBar({ user, setUser }) {
  async function handleLogout() {
    await fetch("/logout", {
      method: "DELETE",
    });

    await setUser(null);
  }

  if (!user) {
    return null;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <Button
              component={Link}
              to="/blueprints"
              color="inherit"
              variant="outlined"
              size="large"
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/current-workout"
              color="inherit"
              variant="outlined"
              size="large"
            >
              Current Workout
            </Button>
          </Box>
          <Button
            component={Link}
            to="/"
            color="inherit"
            variant="outlined"
            size="large"
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
