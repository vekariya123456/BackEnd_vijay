const http = require('http');

// server 4
const server4= http.createServer((req,res) => {
    res.end("Welcome to Local Server 4.....");
  });     
  
  server4.listen(2204,() => {
  console.log('Server Start at port 2204');
  });