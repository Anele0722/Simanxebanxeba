const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// API Routes
app.post('/api/donations', (req, res) => {
  // Process donation
  console.log('Donation received:', req.body);
  res.json({ 
    success: true, 
    message: 'Thank you for your donation!',
    data: req.body
  });
});

app.post('/api/volunteers', (req, res) => {
  // Process volunteer application
  console.log('Volunteer application:', req.body);
  res.json({ 
    success: true, 
    message: 'Thank you for your application!',
    data: req.body
  });
});

app.post('/api/contact', (req, res) => {
  // Process contact form
  console.log('Contact form submission:', req.body);
  res.json({ 
    success: true, 
    message: 'Thank you for your message!',
    data: req.body
  });
});

// Serve main page for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});