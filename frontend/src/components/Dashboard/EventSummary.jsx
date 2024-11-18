// src/components/Dashboard/EventSummary.js
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Card,
  CardContent,
  Container,
} from "@mui/material";

function EventSummary() {
  const navigate = useNavigate();
  const pastEvents = [
    { id: 1, name: "Orientation", date: "2024-11-01", participants: 150 },
    { id: 2, name: "AI Workshop", date: "2024-10-20", participants: 80 },
  ];

  return (
    <Container className="normal-container">
      <Button
        variant="outlined"
        color="primary"
        size="large"
        sx={{
          marginBottom: "1rem",
          color: "white",
          borderColor: "whitesmoke",
        }}
        onClick={() => navigate("/organizer-dashboard")}
      >
        Back
      </Button>
      <Typography variant="h4" component="h2" sx={{marginBottom:"1rem", fontWeight:"500", fontFamily:"montserrat"}}>
        Event Summary
      </Typography>
      {pastEvents.map((event) => (
        <Card  key={event.id} variant="outlined" sx={{background:"linear-gradient(-45deg, #222966 ,#251938)", color:"whitesmoke", marginBottom:"1.2rem", minWidth:"12rem", textAlign:"center"}}>
          <CardContent>
            <Typography variant="h5" sx={{fontSize:"2rem", fontWeight:"500", fontFamily:"montserrat"}}>
              {event.name}
            </Typography>
            <Typography variant="body1" sx={{fontSize:"1.4rem",fontFamily:"montserrat"}}><strong>Date:</strong> {event.date}</Typography>
            <Typography variant="body1" sx={{fontSize:"1.4rem",fontFamily:"montserrat"}}>
              <strong>Participants:</strong> {event.participants}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default EventSummary;
