import cors from 'cors';
import bcrypt from 'bcryptjs';
import express from 'express';
import dotenv from 'dotenv';
import conn from './mongo.js';
import { Person } from './models/Person.js';

// Load environment variables from .env file
dotenv.config();

// Create an Express application instance
const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Middleware to parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: false }));

// Enable Cross-Origin Resource Sharing (CORS) middleware, allowing the server to accept requests from other domains
app.use(cors());

// Extract port from environment variables
const port = process.env.PORT;

// Root route handler
app.get('/', cors(), (req, res) => {
  res.send('Hello SUDIP!');
});

// Registration route handler
app.post('/register', async (req, res) => {
  // Extract form data from request body
  const form = req.body.form;

  // Create data object with required fields
  const data = {
    fullName: form.fullName,
    email: form.email,
    password: form.password
  };

  try {
    // Check if user already exists
    const existingUser = await Person.findOne({ email: data.email });
    if (existingUser) {
       res.send('exist');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;

    // Insert the user data into the database
    const newUser = new Person(data);
    await newUser.save();

    // Send success response if registration is successful
    res.send('success');
  } catch (e) {
    // Send failure response if any error occurs
    console.error(e);
    res.send('fail');
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
