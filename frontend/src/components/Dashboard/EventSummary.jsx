// src/components/Dashboard/EventSummary.js
import React from "react";
import { useNavigate } from "react-router-dom";

function EventSummary() {
  const navigate = useNavigate();
  const pastEvents = [
    { id: 1, name: "Orientation", date: "2024-11-01", participants: 150 },
    { id: 2, name: "AI Workshop", date: "2024-10-20", participants: 80 },
  ];

  return (
    <div className="dashboard">
      <button onClick={() => navigate("/organizer-dashboard")}>Back</button>
      <h2>Event Summary</h2>
      {pastEvents.map(event => (
        <div key={event.id} className="event">
          <h3>{event.name}</h3>
          <p>Date: {event.date}</p>
          <p>Participants: {event.participants}</p>
        </div>
      ))}
    </div>
  );
}

export default EventSummary;
