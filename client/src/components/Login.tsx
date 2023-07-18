import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [loginErrors, setLoginErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const statusCode = response.status;
    const responseBody = await response.json();

    if (statusCode === 201) {
      // If the login was successful, redirect to the user page
      setUser({
        id: responseBody.id,
        username: responseBody.username,
      });

      navigate("/blueprints");

      return;
    }

    if (statusCode === 401 && responseBody.errors) {
      // If there's a body and it contains errors, display that
      // Otherwise, display a generic error
      setLoginErrors(responseBody.errors);
    } else {
      setLoginErrors(["An unknown error occurred. Please try again."]);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
            }}
          >
            <LockOutlinedIcon sx={{ fontSize: "35px" }} />
            <Typography component="h1" variant="h4">
              Sign in
            </Typography>
          </Box>
        </div>
        <Box component="form" sx={{ width: "100%" }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            onChange={handleUsernameChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
        </Box>
        {loginErrors.length > 0 && (
          <Box sx={{ width: "100%" }}>
            {loginErrors.map((error) => (
              <Typography
                key={error}
                variant="body1"
                sx={{ color: "red", textAlign: "center" }}
              >
                {error}
              </Typography>
            ))}
          </Box>
        )}
        <Link href="#" sx={{ textAlign: "right", width: "100%" }}>
          {"No account? Sign Up"}
        </Link>
      </Box>
    </Container>
  );
}
