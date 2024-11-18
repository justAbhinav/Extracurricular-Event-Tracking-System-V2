// src/components/Dashboard/StudentDashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <Container className="dash-container" variant="large">
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: "6rem" }}
      >
        Student Dashboard
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/upcoming-events")}
        style={{
          marginBottom: "10px",
          minWidth: "250px",
          fontSize: "1.2rem",
          backgroundColor: "#4CAF50",
        }}
        size="large"
        className="normal-button"
      >
        Upcoming Events
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/registered-events")}
        size="large"
        sx={{
          marginBottom: "10px",
          minWidth: "250px",
          fontSize: "1.2rem",
          backgroundColor: "#FFC107",
          color: "black",
        }}
        className="normal-button"
      >
        Registered Events
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate("/")}
        sx={{
          marginTop: "6rem",
          minWidth: "220px",
          fontSize: "1.2rem",
          backgroundColor: "#F44336",
        }}
      >
        Logout
      </Button>
    </Container>
  );
}

export default StudentDashboard;