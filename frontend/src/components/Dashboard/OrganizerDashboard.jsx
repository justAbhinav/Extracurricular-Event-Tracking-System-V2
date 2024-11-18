// src/components/Dashboard/OrganizerDashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";

function OrganizerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h2>Organizer Dashboard</h2>
      <button onClick={() => navigate("/add-event")}>Add New Event</button>
      <button onClick={() => navigate("/edit-events")}>Edit Events</button>
      <button onClick={() => navigate("/event-summary")}>Event Summary</button>
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
}

export default OrganizerDashboard;
