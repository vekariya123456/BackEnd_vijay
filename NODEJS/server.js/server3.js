const http = require('http');

//server 3
const server3= http.createServer((req,res) => {
    res.end("Welcome to Local Server 3.....");
  });     
  
  server3.listen(2203,() => {
  console.log('Server Start at port 2203');
  });