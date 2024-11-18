// src/components/Dashboard/EditEvents.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Event from "./Event";

function EditEvents() {
  const [events, setEvents] = useState([
    // Sample data
    { id: 1, name: "Tech Talk", organizer: "CS Dept", venue: "Hall A", startTime: "2024-11-22T10:00", endTime: "2024-11-22T12:00" },
  ]);
  const navigate = useNavigate();

  const handleEdit = (eventId) => {
    // Logic to edit event
    console.log(`Editing event ${eventId}`);
    // After editing, navigate to a new edit form or show an edit modal
  };

  const handleCancel = (eventId) => {
    if (window.confirm("Are you sure you want to cancel this event?")) {
      setEvents(events.filter(event => event.id !== eventId));
    }
  };

  return (
    <div className="dashboard">
      <button onClick={() => navigate("/organizer-dashboard")}>Back</button>
      <h2>Edit Events</h2>
      {events.map(event => (
        <Event key={event.id} {...event} onEdit={() => handleEdit(event.id)} onCancel={() => handleCancel(event.id)} />
      ))}
    </div>
  );
}

export default EditEvents;
