import React from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrganizerLogin = () => {
  const [role, setRole] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Your login logic here
    setError("");
    navigate("/organizer-dashboard");
  };

  return (
    <Container maxWidth="lg" sx={{}} className="container">
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
        Organiser Login
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
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
            "& .MuiInputLabel-root": {
              color: "whitesmoke", // Change the color of the label
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "whitesmoke", // Change the border color
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "whitesmoke", // Change the border color on hover
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "whitesmoke", // Change the border color when focused
            },
            "&": {
              borderColor: "whitesmoke", // Change the border color when focused
            },
          }}
        >
          <MenuItem value="Faculty">Faculty</MenuItem>
          <MenuItem value="Administration">Administration</MenuItem>
          <MenuItem value="GymKhana">GymKhana</MenuItem>
          <MenuItem value="FestOrganiser">Fest Organiser</MenuItem>
          <MenuItem value="Clubs">Clubs</MenuItem>
        </Select>
      </FormControl>
      {/* <TextField
        fullWidth
        margin="normal"
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Email"
      />
      <TextField
        fullWidth
        margin="normal"
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your Password"
      /> */}
      <Button
        variant="contained"
        color="success"
        onClick={handleLogin}
        sx={{ marginTop: "1.5rem" }}
      >
        Login with google
      </Button>
    </Container>
  );
};

export default OrganizerLogin;
