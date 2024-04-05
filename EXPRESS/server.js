const express = require('express');
const server = express();        // server create

const path = require('path');
const ejs = require('ejs');


server.set("view engine", "ejs");
// server.set("view engine", "hbs");


server.get('/student', (req, res ) => {
    let data = {
        name : "Jayesh",
        couese: "Full-stack developer",
        age: 25,
        hobbies:['Reading','Music']
    }
    res.render('student',data);
});

server.listen(2000,() => {
    console.log("Server Start at http://localhost:2000");
});
    