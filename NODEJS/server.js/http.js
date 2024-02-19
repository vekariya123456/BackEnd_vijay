// http Module

const http = require('http');

//server 1
const server1= http.createServer((req,res) => {
    res.end("Welcome to Local Server 1.....");
});     //Server Create

server1.listen(2201,() => {
  console.log('Server Start at port 2201');
});










