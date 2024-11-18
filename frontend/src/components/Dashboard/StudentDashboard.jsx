// src/components/Dashboard/StudentDashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h2>Student Dashboard</h2>
      <button onClick={() => navigate("/upcoming-events")}>Upcoming Events</button>
      <button onClick={() => navigate("/registered-events")}>Registered Events</button>
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
}

export default StudentDashboard;
