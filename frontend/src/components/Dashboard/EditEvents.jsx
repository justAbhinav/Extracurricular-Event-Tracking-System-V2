// src/components/Dashboard/EditEvents.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography, Box, TextField } from "@mui/material";

function EditEvents() {
  const [events, setEvents] = useState([
    // Sample data
    {
      id: 1,
      name: "Tech Talk",
      organizer: "CS Dept",
      venue: "Hall A",
      startTime: "2024-11-22T10:00",
      endTime: "2024-11-22T12:00",
    },
  ]);
  const [originalEvents, setOriginalEvents] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setOriginalEvents(JSON.parse(JSON.stringify(events)));
  }, []);

  const handleSave = () => {
    // Logic to save event
    console.log("Saving events", events);
    setOriginalEvents(JSON.parse(JSON.stringify(events)));
    setIsChanged(false);
  };

  const handleCancelChanges = () => {
    setEvents(JSON.parse(JSON.stringify(originalEvents)));
    setIsChanged(false);
  };

  const handleDelete = (eventId) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter((event) => event.id !== eventId));
      setIsChanged(true);
    }
  };

  const handleNavigate = () => {
    if (isChanged) {
      if (
        window.confirm(
          "You have unsaved changes. Are you sure you want to leave without saving?"
        )
      ) {
        navigate("/organizer-dashboard");
      }
    } else {
      navigate("/organizer-dashboard");
    }
  };

  const handleChange = (eventId, field, value) => {
    setEvents(
      events.map((ev) => (ev.id === eventId ? { ...ev, [field]: value } : ev))
    );
    setIsChanged(true);
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
          onClick={handleNavigate}
        >
          Back
        </Button>
        <Typography
          variant="h4"
          sx={{ fontFamily: "montserrat", marginBottom: "0.5rem" }}
        >
          Edit Events
        </Typography>
        {events.map((event) => (
          <Box key={event.id} mb={2} width="100%">
            <TextField
              label="Event Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={event.name}
              InputLabelProps={{
                style: { color: "whitesmoke" },
              }}
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "whitesmoke",
                  },
                  "&:hover fieldset": {
                    borderColor: "whitesmoke",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "whitesmoke",
                  },
                  "&": {
                    color: "whitesmoke",
                  },
                },
              }}
              onChange={(e) => handleChange(event.id, "name", e.target.value)}
            />
            <TextField
              label="Venue"
              variant="outlined"
              fullWidth
              margin="normal"
              value={event.venue}
              InputLabelProps={{
                style: { color: "whitesmoke" },
              }}
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "whitesmoke",
                  },
                  "&:hover fieldset": {
                    borderColor: "whitesmoke",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "whitesmoke",
                  },
                  "&": {
                    color: "whitesmoke",
                  },
                },
              }}
              onChange={(e) => handleChange(event.id, "venue", e.target.value)}
            />
            <TextField
              label="Start Time"
              type="datetime-local"
              variant="outlined"
              fullWidth
              margin="normal"
              value={event.startTime}
              InputLabelProps={{
                style: { color: "whitesmoke" },
                shrink: true,
              }}
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "whitesmoke",
                  },
                  "&:hover fieldset": {
                    borderColor: "whitesmoke",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "whitesmoke",
                  },
                  "&": {
                    color: "whitesmoke",
                  },
                },
              }}
              onChange={(e) =>
                handleChange(event.id, "startTime", e.target.value)
              }
            />
            <TextField
              label="End Time"
              type="datetime-local"
              variant="outlined"
              fullWidth
              margin="normal"
              value={event.endTime}
              InputLabelProps={{
                style: { color: "whitesmoke" },
                shrink: true,
              }}
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "whitesmoke",
                  },
                  "&:hover fieldset": {
                    borderColor: "whitesmoke",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "whitesmoke",
                  },
                  "&": {
                    color: "whitesmoke",
                  },
                },
              }}
              onChange={(e) =>
                handleChange(event.id, "endTime", e.target.value)
              }
            />
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button
                variant="contained"
                color="success"
                onClick={handleSave}
                disabled={!isChanged}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={handleCancelChanges}
              >
                Cancel Changes
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(event.id)}
              >
                Delete
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default EditEvents;
