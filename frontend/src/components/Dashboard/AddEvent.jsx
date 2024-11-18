// src/components/Dashboard/AddEvent.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Container, Typography, Box } from "@mui/material";

function AddEvent() {
  const [event, setEvent] = useState({
    name: "",
    venue: "",
    startTime: "",
    endTime: "",
  });
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
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          sx={{
            marginBottom: "1rem",
            color: "white",
            borderColor: "whitesmoke",
          }}
          onClick={() => navigate("/organizer-dashboard")}
        >
          Back
        </Button>
        <Typography
          variant="h4"
          sx={{ fontFamily: "montserrat", marginBottom: "0.5rem" }}
        >
          Add a new event
        </Typography>
        <TextField
          label="Event Name"
          variant="outlined"
          fullWidth
          multiline
          margin="normal"
          onChange={(e) => setEvent({ ...event, name: e.target.value })}

          InputLabelProps={{
            style: { color: "whitesmoke" },
          }}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "whitesmoke", // Change the border color
              },
              "&:hover fieldset": {
                borderColor: "whitesmoke", // Change the border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "whitesmoke", // Change the border color when focused
              },
              "&": {
                color: "whitesmoke", // Change the text color
              },
            },
          }}
        />
        <TextField
          label="Venue"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setEvent({ ...event, venue: e.target.value })}
          InputLabelProps={{
            style: { color: "whitesmoke" },
          }}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "whitesmoke", // Change the border color
              },
              "&:hover fieldset": {
                borderColor: "whitesmoke", // Change the border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "whitesmoke", // Change the border color when focused
              },
              "&": {
                color: "whitesmoke", // Change the text color
              },
            },
          }}
        />
        <TextField
          label="Start Time"
          type="datetime-local"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            style: { color: "whitesmoke" },
            shrink: true
          }}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "whitesmoke", // Change the border color
              },
              "&:hover fieldset": {
                borderColor: "whitesmoke", // Change the border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "whitesmoke", // Change the border color when focused
              },
              "&": {
                color: "whitesmoke", // Change the text color
              },
            },
          }}
          onChange={(e) => setEvent({ ...event, startTime: e.target.value })}
        />
        <TextField
          label="End Time"
          type="datetime-local"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setEvent({ ...event, endTime: e.target.value })}
          InputLabelProps={{
            style: { color: "whitesmoke" },
            shrink: true
          }}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "whitesmoke", // Change the border color
              },
              "&:hover fieldset": {
                borderColor: "whitesmoke", // Change the border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "whitesmoke", // Change the border color when focused
              },
              "&": {
                color: "whitesmoke", // Change the text color
              },
            }}}
        />
        <Button
          variant="contained"
          onClick={handleAddEvent}
          color="success"
          sx={{ mt: 4 }}
        >
          Add Event
        </Button>
      </Box>
    </Container>
  );
}

export default AddEvent;
