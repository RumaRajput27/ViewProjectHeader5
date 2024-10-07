const express = require('express');
const path = require('path');
const fs = require('fs');  // Import fs module
const app = express();

// Import contact routes
const contactRoutes = require('./routes/contactRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Use the contact routes
app.use('/', contactRoutes);

// Serve login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Serve send message page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'message.html'));
});

// Save message to file when submitted from main page
app.post('/send-message', (req, res) => {
    const { username, message } = req.body;

    const data = { username, message };

    fs.appendFile(path.join(__dirname, 'messages.json'), JSON.stringify(data) + '\n', (err) => {
        if (err) {
            return res.status(500).send('Error saving message');
        }
        res.send('Message received and stored!');
    });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
