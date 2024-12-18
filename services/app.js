const express = require('express');
const apiRoutes = require('./routes/apiRoutes'); // Import routes

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(Server running on http://localhost:${PORT});
});