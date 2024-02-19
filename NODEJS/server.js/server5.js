const http = require('http');

// server 5
const server5= http.createServer((req,res) => {
    res.end("Welcome to Local Server 5.....");
  });     
  
  server5.listen(2205,() => {
  console.log('Server Start at port 2205');
  });