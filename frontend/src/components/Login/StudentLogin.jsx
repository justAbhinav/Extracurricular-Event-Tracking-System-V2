// src/components/StudentLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@lnmiit.ac.in$/;
    if (!emailRegex.test(email)) {
      setError("Please use a valid LNMIIT email address.");
      return;
    }
    // Placeholder login validation
    setError("");
    navigate("/student-dashboard");
  };

  return (
    <div className="login-page">
      <button onClick={() => navigate("/")}>Back</button>
      <h2>Student Login</h2>
      {error && <p className="error">{error}</p>}
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default StudentLogin;
