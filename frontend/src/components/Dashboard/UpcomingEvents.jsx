// src/components/Dashboard/UpcomingEvents.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Event from "./Event";

function UpcomingEvents() {
  const [upcomingEvents, setUpcomingEvents] = useState([
    // Sample data
    { id: 1, name: "Hackathon", organizer: "CS Club", venue: "Main Hall", startTime: "2024-11-18T10:00", endTime: "2024-11-18T18:00" },
    { id: 2, name: "Dance Battle", organizer: "Dance Club", venue: "Auditorium", startTime: "2024-11-20T14:00", endTime: "2024-11-20T17:00" },
  ]);
  const navigate = useNavigate();

  const handleRegister = (eventId) => {
    const updatedEvents = upcomingEvents.filter(event => event.id !== eventId);
    setUpcomingEvents(updatedEvents);
    // Code to add to registered events (local state or backend)
  };

  return (
    <div className="dashboard">
      <button onClick={() => navigate("/student-dashboard")}>Back</button>
      <h2>Upcoming Events</h2>
      {upcomingEvents.map(event => (
        <Event key={event.id} {...event} onRegister={() => handleRegister(event.id)} />
      ))}
    </div>
  );
}

export default UpcomingEvents;
