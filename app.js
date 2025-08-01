const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/ConnectToMongoDb');
const dotenv = require('dotenv');
dotenv.config(); 

// Initialize the app
const app = express();


// Connect to MongoDB
connectDB();


app.use(bodyParser.json());
app.use(express.json());
const authRoutes = require("./src/routes/authRoutes");

app.get("/", (req, res) => {
  res.send("Welcome to the Hospital Management System API");
});


app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

