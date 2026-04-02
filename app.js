const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Middleware
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

// Pug setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Endpoint
app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('index', params);
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
app.get("/class", (req, res) => {
    res.render("class");
});
app.get("/services", (req, res) => {
    res.render("services");
});
app.get("/home", (req, res) => {
    res.render("home");
});

// Start server
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});