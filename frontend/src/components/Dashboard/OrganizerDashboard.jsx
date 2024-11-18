// src/components/Dashboard/OrganizerDashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

function OrganizerDashboard() {
  const navigate = useNavigate();

  return (
    <Container className="dash-container" variant="large">
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: "10rem" }}
      >
        Welcome to the Organizer Dashboard
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/add-event")}
        style={{
          marginBottom: "10px",
          minWidth: "220px",
          fontSize: "1.2rem",
          backgroundColor: "#4CAF50",
        }}
        size="large"
        className="normal-button"
      >
        Add New Event
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/edit-events")}
        size="large"
        sx={{
          marginBottom: "10px",
          minWidth: "220px",
          fontSize: "1.2rem",
          backgroundColor: "#FFC107",
          color: "black",
        }}
        className="normal-button"
      >
        Edit Events
      </Button>
      <Button
        className="normal-button"
        variant="contained"
        color="primary"
        onClick={() => navigate("/event-summary")}
        size="large"
        style={{
          marginBottom: "10px",
          minWidth: "220px",
          fontSize: "1.2rem",
        }}
      >
        Event Summary
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

export default OrganizerDashboard;
