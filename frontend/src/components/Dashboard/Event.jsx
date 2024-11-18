// src/components/Dashboard/Event.js
import { styled } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import React from "react";

function Event({
  id,
  name,
  organizer,
  venue,
  startTime,
  endTime,
  onRegister,
  onUnregister,
}) {
  return (
    <div className="event">
      <h3>{name}</h3>
      <p>Organizer: {organizer}</p>
      <p>Venue: {venue}</p>
      <p>Start Time: {new Date(startTime).toLocaleString()}</p>
      <p>End Time: {new Date(endTime).toLocaleString()}</p>
      {onRegister && (
        <button className="normal-button" onClick={() => onRegister(id)}>
          Register
        </button>
      )}
      {onUnregister && (
        <button className="normal-button" onClick={() => onUnregister(id)}>
          Unregister
        </button>
      )}
    </div>
  );
}

export default Event;
