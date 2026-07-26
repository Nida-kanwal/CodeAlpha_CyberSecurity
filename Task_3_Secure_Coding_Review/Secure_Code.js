// CodeAlpha Task 3 - Secure Coding Review
// Secure User Management Application

const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());


// Secure password storage (Hashing)
let users = [];


// User Registration
app.post("/register", async (req, res) => {

    const { username, password } = req.body;


    // Input validation
    if (!username || !password) {
        return res.status(400).send("Username and password required");
    }


    // Password hashing
    const hashedPassword = await bcrypt.hash(password, 10);


    users.push({
        username: username,
        password: hashedPassword
    });


    res.send("User Registered Successfully");

});


// Secure Login
app.post("/login", async (req, res) => {

    const { username, password } = req.body;


    const user = users.find(
        user => user.username === username
    );


    if (!user) {
        return res.status(401).send("Invalid Credentials");
    }


    // Compare hashed password
    const match = await bcrypt.compare(
        password,
        user.password
    );


    if (match) {
        res.send("Login Successful");
    } 
    else {
        res.status(401).send("Invalid Credentials");
    }

});


// Secure Error Handling
app.use((err, req, res, next) => {

    console.error(err);

    res.status(500).send(
        "Internal Server Error"
    );

});


app.listen(3000, () => {

    console.log(
        "Secure Server running on port 3000"
    );

});