// src/components/Dashboard/AddEvent.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import {
  doc,
  setDoc,
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { app } from "../Login/firebase.js"; // Update with your Firebase config file path

function AddEvent() {
  const [event, setEvent] = useState({
    name: "",
    venue: "",
    startTime: "",
    endTime: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const db = getFirestore(app);

  const validateEvent = () => {
    const now = new Date();
    const startTime = new Date(event.startTime);
    const endTime = new Date(event.endTime);

    if (startTime < now) {
      setError("Start time cannot be in the past.");
      return false;
    }

    if (endTime <= startTime) {
      setError("End time must be after the start time.");
      return false;
    }

    return true;
  };

  // const checkVenueAvailability = async () => {
  //   const venueRef = collection(db, "EVENTS");
  //   const venueQuery = query(
  //     venueRef,
  //     where("venue", "==", event.venue),
  //     where("startTime", "<=", event.endTime),
  //     where("endTime", ">=", event.startTime)
  //   );

  //   const querySnapshot = await getDocs(venueQuery);
  //   return querySnapshot.empty; // True if no conflicting events are found
  // };

  const handleAddEvent = async () => {
    setError(null);
    setSuccess(false);

    if (!validateEvent()) return;

    // const isVenueAvailable = await checkVenueAvailability();
    // if (!isVenueAvailable) {
    //   setError("The venue is not free at the selected time.");
    //   return;
    // }

    const { name, venue, startTime, endTime } = event;

    if (!name || !venue || !startTime || !endTime) {
      alert("Please fill in all fields.");
      return;
    }

    const startTimestamp = Timestamp.fromDate(new Date(startTime));
    const endTimestamp = Timestamp.fromDate(new Date(endTime));
    const host1 = localStorage.getItem("name");

    try {
      const eventRef = await addDoc(collection(db, "EVENTS"), {
        name,
        venue,
        startTime: startTimestamp,
        endTime: endTimestamp,
        host: host1,
      });
      setSuccess(true);
      alert("Event added successfully!");
      navigate("/organizer-dashboard");
    } catch (err) {
      setError("Failed to add the event. Please try again.");
      console.error(err);
    }
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
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">Event added successfully!</Alert>}
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
        />
        <TextField
          label="Start Time"
          type="datetime-local"
          variant="outlined"
          fullWidth
          margin="normal"
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
