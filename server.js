const express = require('express'); // Import the express module
const mongoose = require('mongoose'); // Import the mongoose module
const bodyParser = require('body-parser'); // Import the body-parser module
const path = require('path'); // Import the path module

const app = express(); // Create an express application
const PORT = process.env.PORT || 3000; // Define the port number

// Middleware
app.use(bodyParser.json()); // Use body-parser middleware to parse JSON requests
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/moneyTracker', {
  useNewUrlParser: true, // Use the new URL parser
  useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
})
  .then(() => console.log('MongoDB connected')) // Log success message if connection is successful
  .catch(err => console.log(err)); // Log error message if connection fails

// Routes
const transactions = require('./routes/transactions'); // Import the transactions route
app.use('/api/transactions', transactions); // Use the transactions route for API requests

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start the server and log the port number
