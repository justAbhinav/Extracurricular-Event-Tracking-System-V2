// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import StudentLogin from "./components/Login/StudentLogin";
import OrganizerLogin from "./components/Login/OrganizerLogin";
import StudentDashboard from "./components/Dashboard/StudentDashboard";
import OrganizerDashboard from "./components/Dashboard/OrganizerDashboard";
import UpcomingEvents from "./components/Dashboard/UpcomingEvents";
import RegisteredEvents from "./components/Dashboard/RegisteredEvents";
import AddEvent from "./components/Dashboard/AddEvent";
import EditEvents from "./components/Dashboard/EditEvents";
import EventSummary from "./components/Dashboard/EventSummary";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/organizer-login" element={<OrganizerLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/organizer-dashboard" element={<OrganizerDashboard />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/registered-events" element={<RegisteredEvents />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/edit-events" element={<EditEvents />} />
        <Route path="/event-summary" element={<EventSummary />} />
      </Routes>
    </Router>
  );
}

export default App;