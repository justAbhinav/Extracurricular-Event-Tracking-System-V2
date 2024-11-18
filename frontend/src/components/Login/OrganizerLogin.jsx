import React from "react";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "./firebase";

const OrganizerLogin = () => {
  const [role, setRole] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    setError("");
    if (!role) {
      setError("Please select a role before logging in.");
      return;
    }

    setLoading(true);

    signInWithPopup(auth, provider)
      .then((result) => {
        const email = result.user.email;

        // Validate LNMIIT email domain
        if (!email.endsWith("@lnmiit.ac.in")) {
          setError("Only LNMIIT email addresses are allowed.");
          setLoading(false);
          return;
        }
        // Send email and role to the backend
        fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, role }),
        })
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            if (data.success) {
              navigate("/organizer-dashboard"); // Redirect to the dashboard
            } else {
              setError(data.message || "Access Denied: Email not found.");
            }
          })
          .catch(() => {
            setError(
              "An error occurred while verifying your login. Please try again."
            );
            setLoading(false);
          });
      })
      .catch(() => {
        setError("Google login failed. Please try again.");
        setLoading(false);
      });
  };

  return (
    <Container maxWidth="lg" className="container">
      <Button
        variant="outlined"
        color="primary"
        size="small"
        sx={{ marginBottom: "1rem", color: "white", borderColor: "whitesmoke" }}
        onClick={() => navigate("/")}
      >
        Back
      </Button>
      <Typography
        variant="h4"
        sx={{ fontFamily: "montserrat", marginBottom: "0.5rem" }}
      >
        Organizer Login
      </Typography>

      <FormControl fullWidth margin="normal">
        <InputLabel
          sx={{
            color: "whitesmoke",
            background: "linear-gradient(-45deg, #2b1d42, #222a68, #2b1d42);",
          }}
        >
          Select your role
        </InputLabel>
        <Select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          sx={{
            color: "white",
            borderColor: "whitesmoke",
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "whitesmoke" },
          }}
        >
          <MenuItem value="FACULTY">Faculty</MenuItem>
          <MenuItem value="ADMINISTRATION">Administration</MenuItem>
          <MenuItem value="GYMKHANA">GymKhana</MenuItem>
          <MenuItem value="FEST_ORGANISER">Fest Organiser</MenuItem>
          <MenuItem value="CLUBS">Clubs</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="success"
        onClick={handleGoogleLogin}
        disabled={loading}
        sx={{ margin: "1.5rem" }}
      >
        {loading ? "Logging in..." : "Login with Google"}
      </Button>

      {error && (
        <Alert severity="error" sx={{ marginBottom: "1rem" }}>
          {error}
        </Alert>
      )}
    </Container>
  );
};

export default OrganizerLogin;
