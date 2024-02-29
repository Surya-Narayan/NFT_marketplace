const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

// Middleware to parse JSON requests
app.use(cors());
app.use(express.json());

// Define your routes
const routes = require('./routes'); // create this file
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});