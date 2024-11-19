import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Update the path if different
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  MenuItem,
} from "@mui/material";
import { app } from "../Login/firebase.js";

function EditEvent() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  const db = getFirestore(app);
  useEffect(() => {
    // Fetch events where host matches localStorage.getItem("name")
    const fetchEvents = async () => {
      try {
        const host = localStorage.getItem("name");
        if (!host) {
          alert("Host name not found in localStorage.");
          return;
        }

        const eventsRef = collection(db, "EVENTS");
        const q = query(eventsRef, where("host", "==", host));
        const querySnapshot = await getDocs(q);

        const fetchedEvents = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedEvents.push({
            id: doc.id,
            ...data,
            // Convert Firestore Timestamps to ISO strings
            startTime: data.startTime?.toDate().toISOString().slice(0, 16),
            endTime: data.endTime?.toDate().toISOString().slice(0, 16),
          });
        });

        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
        alert("Failed to fetch events. Please try again.");
      }
    };

    fetchEvents();
  }, []);

  const handleSaveChanges = async () => {
    if (!selectedEvent) {
      alert("No event selected for editing.");
      return;
    }

    const { id, name, venue, startTime, endTime } = selectedEvent;

    // Validate input fields
    if (!name || !venue || !startTime || !endTime) {
      alert("Please fill in all fields.");
      return;
    }

    const startTimestamp = Timestamp.fromDate(new Date(startTime));
    const endTimestamp = Timestamp.fromDate(new Date(endTime));

    if (startTimestamp < Timestamp.now()) {
      alert("Start time cannot be in the past.");
      return;
    }

    if (endTimestamp <= startTimestamp) {
      alert("End time must be later than start time.");
      return;
    }

    try {
      const eventDocRef = doc(db, "events", id);
      await updateDoc(eventDocRef, {
        name,
        venue,
        startTime: startTimestamp,
        endTime: endTimestamp,
      });

      alert("Event updated successfully!");
      navigate("/organizer-dashboard");
    } catch (error) {
      console.error("Error updating event:", error);
      alert("Failed to update the event. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedEvent((prev) => ({ ...prev, [name]: value }));
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
          Edit Event
        </Typography>
        {events.length > 0 ? (
          <>
            <TextField
              select
              label="Select Event"
              fullWidth
              margin="normal"
              value={selectedEvent?.id || ""}
              onChange={(e) => {
                const event = events.find((evt) => evt.id === e.target.value);
                setSelectedEvent(event);
              }}
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
            >
              {events.map((event) => (
                <MenuItem key={event.id} value={event.id}>
                  {event.name}
                </MenuItem>
              ))}
            </TextField>
            {selectedEvent && (
              <>
                <TextField
                  label="Event Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={selectedEvent.name}
                  onChange={handleChange}
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
                  name="venue"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={selectedEvent.venue}
                  onChange={handleChange}
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
                  name="startTime"
                  type="datetime-local"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={selectedEvent.startTime}
                  onChange={handleChange}
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
                <TextField
                  label="End Time"
                  name="endTime"
                  type="datetime-local"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={selectedEvent.endTime}
                  onChange={handleChange}
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
                  onClick={handleSaveChanges}
                  color="success"
                  sx={{ mt: 4 }}
                >
                  Save Changes
                </Button>
              </>
            )}
          </>
        ) : (
          <Typography variant="body1" sx={{ mt: 4 }}>
            No events found for the current host.
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default EditEvent;
