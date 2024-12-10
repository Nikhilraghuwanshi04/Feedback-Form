const express = require("express");
const morgan = require("morgan");
const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true })); // To parse form data

// Custom Middleware
app.use("/", (req, res, next) => {
    console.log("This is middleware");
    return next();
});

// Routes
app.get("/", (req, res) => {
    res.render("index");
});

app.post("/form-data-submit", (req, res) => {
    console.log(req.body); // Form data logged here
    res.send("Form submitted successfully!");
});

// Server
app.listen(2000, () => {
    console.log("Server running on port 2000");
});
