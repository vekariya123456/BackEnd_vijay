const http = require('http');


//server 2
const server2= http.createServer((req,res) => {
  res.end("Welcome to Local Server 2.....");
});     

server2.listen(2202,() => {
console.log('Server Start at port 2202');
});