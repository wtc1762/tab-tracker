console.log('Hello World!');
// Import required dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create an Express application - app
const app = express();

app.use(morgan('combined')); // Log all HTTP requests to the console
app.use(bodyParser.json()); // Parse JSON data from the request body
app.use(cors()); // Enable CORS for all requests from the client

// Define a route to handle GET requests to /status
app.get('/status', (req, res) => {
    res.send({
        message: 'Hello World!'
    });
});

app.listen(process.env.PORT || 8081); // Start the Express server on port 8081