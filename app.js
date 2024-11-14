const express = require("express");
const fs = require("fs");
const mysql = require("mysql");
const path = require("path");
const app = express();
const port = 80;

// Middleware to parse URL-encoded and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json()); // for parsing application/json

// Set up the views and static folder
app.set('views', 'D:/NODE.JS COURSE/REV.1/project/views');
app.use("/static", express.static('static'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.status(200).render('index');
});
app.get('/contact', (req, res) => {
    res.status(200).render('contact');
});
app.get('/about', (req, res) => {
    res.status(200).render('about');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});






app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const contactMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    try {
        fs.writeFileSync(path.join(__dirname, 'contact', 'contact.txt'), contactMessage);
        res.json({ success: true, message: "Your message has been successfully submitted" });
    } catch (err) {
        console.error("Error writing contact message:", err);
        res.status(500).json({ success: false, message: "An error occurred while submitting your message" });
    }
    });























    app.post('/', (req, res) => {
        const { name, email, message } = req.body;
    
        // Prepare the message content
        const contactMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    
        try {
            // Try writing the contact message to a file
            fs.writeFileSync(path.join(__dirname, 'contact', 'contact.txt'), contactMessage);
    
            // Send a JSON response with success message
            res.json({ success: true, message: "Your message has been successfully submitted" });
        } catch (err) {
            console.error("Error writing contact message:", err);
    
            // Send a JSON response with an error message
            res.status(500).json({ success: false, message: "An error occurred while submitting your message" });
        }
    });