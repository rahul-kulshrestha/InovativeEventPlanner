// src/Login.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., form validation, API calls, etc.)
    console.log("Login Info:", { email, password });
    const respones = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST", // Specify the method as POST
      headers: {
        "Content-Type": "application/json", // Content type header for JSON
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }), // Convert JavaScript object to JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        // console.log(data); // Handle the response data
        localStorage.setItem("authToken", data.token.access);
        navigate('/')
        // Retrieve token from localStorage
        const token = localStorage.getItem('authToken');
        console.log(token);

        // Remove token from localStorage (for logout)
        // localStorage.removeItem("authToken");
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            Login
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </Box>

          <Box mb={3}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </Box>

          <Box textAlign="center">
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
