// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import { UserProvider } from "./UserContext";
import "./App.css";

const ProtectedRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem("authToken");
  return token ? element : <Navigate to="/" />;
};

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/organizer-login" element={<OrganizerLogin />} />
          <Route
            path="/student-dashboard"
            element={<ProtectedRoute element={<StudentDashboard />} />}
          />
          <Route
            path="/organizer-dashboard"
            element={<ProtectedRoute element={<OrganizerDashboard />} />}
          />
          <Route
            path="/upcoming-events"
            element={<ProtectedRoute element={<UpcomingEvents />} />}
          />
          <Route
            path="/registered-events"
            element={<ProtectedRoute element={<RegisteredEvents />} />}
          />
          <Route
            path="/add-event"
            element={<ProtectedRoute element={<AddEvent />} />}
          />
          <Route
            path="/edit-events"
            element={<ProtectedRoute element={<EditEvents />} />}
          />
          <Route
            path="/event-summary"
            element={<ProtectedRoute element={<EventSummary />} />}
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
