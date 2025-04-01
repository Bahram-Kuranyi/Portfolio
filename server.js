const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the Thank You page
app.get('/thank-you.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'thank-you.html'));
});

// Handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Replace with your email
            pass: 'your-email-password'   // Replace with your email password
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // Replace with your email
        subject: `Message from ${name}`,
        text: message
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, error: error.toString() });
        }
        res.status(200).json({ success: true, message: 'Message sent: ' + info.response });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});