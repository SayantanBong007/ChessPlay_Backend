const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((err) => {
    console.log("Error while connecting to DB", err);
  });

app.get("/", (req, res) => {
  res.send("Server is running correctly");
});

// Set the port for the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Listening on port ", port);
});
