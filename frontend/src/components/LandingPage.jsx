import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button, Box, Tab } from "@mui/material";
import logo from "./logo.png";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ height: "1" }} className="landing-page">
      <Box textAlign="center" mt={5}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            marginBottom: "1rem",
            fontFamily: "montserrat",
          }}
        >
          Welcome to LNMIIT
        </Typography>
        <img src={logo} alt="EETS LNMIIT Logo" className="logo" />
        <Typography
          variant="h5"
          sx={{ fontWeight: "500", marginBottom: "1rem" }}
        >
          Extra-Curricular Event Tracking System
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: "400", fontSize: "1rem" }}
        >
          Integrated Software Development Lab
        </Typography>
        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/student-login")}
            sx={{ mr: "6rem" }}
            size="large"
          >
            Student Login
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/organizer-login")}
            size="large"
          >
            Organizer Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default LandingPage;
