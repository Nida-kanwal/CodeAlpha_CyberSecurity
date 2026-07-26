// CodeAlpha Task 3 - Secure Coding Review
// Vulnerable User Management Application

const express = require("express");

const app = express();

app.use(express.json());

// Hardcoded credentials (Vulnerability)
const adminPassword = "admin123";


// Login API
app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;


    // SQL Injection Vulnerability
    const query = 
    "SELECT * FROM users WHERE username='" 
    + username + 
    "' AND password='" 
    + password + "'";


    console.log("Executing Query:", query);


    // Plain text password comparison (Weak Authentication)
    if(password === adminPassword){

        res.send("Login Successful");

    } else {

        res.send("Invalid Credentials");

    }

});


// User Registration API
app.post("/register", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;


    // No input validation
    console.log("New User:", username);


    // Storing password without hashing
    const user = {
        username: username,
        password: password
    };


    console.log(user);


    res.send("User Registered");

});


// Detailed error exposure
app.use((err, req, res, next) => {

    res.send(err.message);

});


app.listen(3000, () => {

    console.log("Server running on port 3000");

});
