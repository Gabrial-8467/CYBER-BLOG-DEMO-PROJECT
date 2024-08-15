const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT || 5000;

// Import routes
const authRoutes = require('./routes/authRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB

const dbURI = process.env.DB_URI; // Get MongoDB URI from environment variable

if (!dbURI) {
    console.error('MongoDB URI is not defined in environment variables');
    process.exit(1); // Exit the process if no URI is found
}

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
        // Start your application logic here
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err.message);
        process.exit(1); // Exit the process if connection fails
    });


// Use routes
app.use('/auth', authRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
