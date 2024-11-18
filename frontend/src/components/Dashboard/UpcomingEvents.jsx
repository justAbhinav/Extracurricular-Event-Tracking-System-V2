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

function UpcomingEvents() {
  const [upcomingEvents, setUpcomingEvents] = useState([
    // Sample data
    {
      id: 1,
      name: "Hackathon",
      organizer: "CS Club",
      venue: "Main Hall",
      startTime: "2024-11-18T10:00",
      endTime: "2024-11-18T18:00",
    },
    {
      id: 2,
      name: "Dance Battle",
      organizer: "Dance Club",
      venue: "Auditorium",
      startTime: "2024-11-20T14:00",
      endTime: "2024-11-20T17:00",
    },
  ]);
  const navigate = useNavigate();

  const handleRegister = (eventId) => {
    const updatedEvents = upcomingEvents.filter(
      (event) => event.id !== eventId
    );
    setUpcomingEvents(updatedEvents);
    // Code to add to registered events (local state or backend)
  };

  return (
    <Container class="container">
      <Button
        variant="outlined"
        color="primary"
        size="small"
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
        Upcoming Events
      </Typography>
      <Grid container spacing={3}>
        {upcomingEvents.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card sx={{background:"linear-gradient(-45deg, #222966 ,#251938)", color:"whitesmoke"}}>
              <CardContent>
                <Event {...event} onRegister={() => handleRegister(event.id)} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default UpcomingEvents;
