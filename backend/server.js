const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const cors = require("cors");
require("dotenv").config(); // To load JWT_SECRET from .env file
const jwt = require("jsonwebtoken");

// Initialize Firebase Admin SDK
const serviceAccount = require("./service-account-file.json"); // Replace with the actual path to your Firebase service account key
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.json());

// Utility function to check if the email exists in the Firestore collection
const checkUserInRole = async (email, role) => {
  try {
    const collectionRef = db.collection(role); // Reference the correct role collection
    const doc = await collectionRef.doc(email).get(); // Check if document exists

    if (doc.exists) {
      return true; // Email exists
    } else {
      return false; // Email does not exist
    }
  } catch (error) {
    console.error("Error checking user in role:", error);
    throw error;
  }
};

// Generate JWT token after successful login
const generateToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// API endpoint for login
app.post("/api/login", async (req, res) => {
  const { email, role } = req.body;

  try {
    // Validate role and email input
    if (!email || !role) {
      return res
        .status(400)
        .json({ success: false, error: "Email and role are required" });
    }

    // Validate email format
    if (!email.endsWith("@lnmiit.ac.in")) {
      return res.status(400).json({
        success: false,
        error: "Only @lnmiit.ac.in emails are allowed",
      });
    }

    // Check if the email exists in the specified role collection
    const userExists = await checkUserInRole(email, role);

    if (userExists) {
      // If the user exists, generate a JWT token
      const token = generateToken(email);
      res
        .status(200)
        .json({ message: "Login successful", success: true, token });
    } else {
      res
        .status(404)
        .json({ success: false, error: `User not found in role: ${role}` });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to verify JWT token
app.post("/api/verify-token", (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res
      .status(400)
      .json({ success: false, message: "Token is required." });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid token." });
    }

    // If the token is valid, return success
    res.json({ success: true, email: decoded.email });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
