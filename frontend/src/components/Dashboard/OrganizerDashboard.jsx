// src/components/Dashboard/OrganizerDashboard.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { UserContext } from "../../UserContext";

function OrganizerDashboard() {
  const navigate = useNavigate();
  const {  user, setUser } = useContext(UserContext);

  return (
    <Container className="dash-container" variant="large">
        {user || localStorage.getItem("name") && (
          <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "10rem", alignContent: "center" }}
        > Hello! {localStorage.getItem("name")}
            , Welcome to the Organizer Dashboard
            </Typography>
        )}
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
        onClick={() => {
          localStorage.removeItem("authToken");
          localStorage.removeItem("name");
          localStorage.removeItem("email");
          setUser(null);
          navigate("/");
        }}
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
