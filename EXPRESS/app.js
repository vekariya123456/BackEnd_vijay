const express = require('express');
const app = express();      //server creat
const port = 2000;
const morgan = require('morgan');

//middleware

let myFun = (req, res , next) =>{
    if((req.query.age) >= 18){
        next();
    }else{
        res.send('sorry! you are under below age 18');
    }
}

//app.use(myFun);       //Application Level middleware
app.use(express.json());  //built-in
app.use(morgan('dev'));
app.get('/',myFun,(req,res) =>{
    res.send("Welcome to Express js");
});

app.post('/',(req,res) => {
    res.send('post method');
})



app.listen(port, () => {
    console.log(`server start at http:/localhost:2000`);
});