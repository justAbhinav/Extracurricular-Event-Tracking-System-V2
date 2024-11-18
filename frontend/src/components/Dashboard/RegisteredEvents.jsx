import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Event from "./Event";
import {
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

function RegisteredEvents() {
  const [registeredEvents, setRegisteredEvents] = useState([
    // Sample data
    {
      id: 1,
      name: "Workshop on AI",
      organizer: "AI Club",
      venue: "Lab 1",
      startTime: "2024-11-19T09:00",
      endTime: "2024-11-19T12:00",
    },
  ]);
  const navigate = useNavigate();

  const handleUnregister = (eventId) => {
    const updatedEvents = registeredEvents.filter(
      (event) => event.id !== eventId
    );
    setRegisteredEvents(updatedEvents);
    // Code to add back to upcoming events (local state or backend)
  };

  return (
    <Container class="container" style={{ minWidth: "35rem" }}>
      <Button
        variant="outlined"
        color="primary"
        size="medium"
        sx={{
          marginBottom: "1rem",
          color: "white",
          borderColor: "whitesmoke",
        }}
        onClick={() => navigate("/student-dashboard")}
      >
        Back
      </Button>
      <Typography variant="h4" component="h2" gutterBottom>
        Registered Events
      </Typography>
      <Grid container spacing={1}>
        {registeredEvents.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card
              sx={{
                background: "linear-gradient(-45deg, #222966 ,#251938)",
                color: "whitesmoke",
              }}
            >
              <CardContent>
                <Event
                  {...event}
                  onUnregister={() => {
                    if (
                      window.confirm("Are you sure you want to unregister?")
                    ) {
                      handleUnregister(event.id);
                    }
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default RegisteredEvents;
