// src/components/Dashboard/RegisteredEvents.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Event from "./Event";

function RegisteredEvents() {
  const [registeredEvents, setRegisteredEvents] = useState([
    // Sample data
    { id: 1, name: "Workshop on AI", organizer: "AI Club", venue: "Lab 1", startTime: "2024-11-19T09:00", endTime: "2024-11-19T12:00" },
  ]);
  const navigate = useNavigate();

  const handleUnregister = (eventId) => {
    const updatedEvents = registeredEvents.filter(event => event.id !== eventId);
    setRegisteredEvents(updatedEvents);
    // Code to add back to upcoming events (local state or backend)
  };

  return (
    <div className="dashboard">
      <button onClick={() => navigate("/student-dashboard")}>Back</button>
      <h2>Registered Events</h2>
      {registeredEvents.map(event => (
        <Event key={event.id} {...event} onUnregister={() => handleUnregister(event.id)} />
      ))}
    </div>
  );
}

export default RegisteredEvents;
