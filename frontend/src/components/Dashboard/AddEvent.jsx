// src/components/Dashboard/AddEvent.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEvent() {
  const [event, setEvent] = useState({ name: "", venue: "", startTime: "", endTime: "" });
  const navigate = useNavigate();

  const handleAddEvent = () => {
    // Implement venue availability check
    const isVenueAvailable = true; // Replace with actual check logic
    if (!isVenueAvailable) {
      alert("The venue is not free at the selected time.");
      return;
    }
    // Code to add event (backend integration or state management)
    alert("Event added successfully!");
    navigate("/organizer-dashboard");
  };

  return (
    <div className="dashboard">
      <button onClick={() => navigate("/organizer-dashboard")}>Back</button>
      <h2>Add New Event</h2>
      <input type="text" placeholder="Event Name" onChange={(e) => setEvent({ ...event, name: e.target.value })} />
      <input type="text" placeholder="Venue" onChange={(e) => setEvent({ ...event, venue: e.target.value })} />
      <input type="datetime-local" placeholder="Start Time" onChange={(e) => setEvent({ ...event, startTime: e.target.value })} />
      <input type="datetime-local" placeholder="End Time" onChange={(e) => setEvent({ ...event, endTime: e.target.value })} />
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
  );
}

export default AddEvent;
