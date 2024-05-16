
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose'
const dbURI = process.env.MONGODB_URI; // Retrieve DB URI from environment variable
//making db connection
const conn= mongoose.connect(dbURI)
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Error occurred:", err);
  });