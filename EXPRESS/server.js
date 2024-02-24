const express = require('express');
const server = express();      //server creat
const path = require('path');


server.post('/',(req,res) => {
   res.send('Post Method');
});
server.get('/',(req,res) => {
   res.end('Welcom to Express.js');
});
server.put('/',(req,res) => {
   res.status(400).json({message: 'put method call'});
});
server.patch('/',(req,res) => {
   res.sendFile(path.join(__dirname,'abc.txt'));
});
server.delete('/',(req,res) => {
   res.sendStatus(404);
})



server.listen(2000, () => {
    console.log(`server start at http:/localhost:2000`);
});