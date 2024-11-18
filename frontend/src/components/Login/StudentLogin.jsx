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

function StudentLogin() {
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    setError("");

    setLoading(true);

    signInWithPopup(auth, provider)
      .then((result) => {
        const email = result.user.email;

        // Validate LNMIIT email domain
        if (!email.endsWith("@lnmiit.ac.in")) {
          setError("Only LNMIIT email addresses are allowed.");
          setLoading(false);
          return;
        } else {
          navigate("/student-dashboard");
        }
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
        Student Login
      </Typography>

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
}

export default StudentLogin;
