const express = require('express');
const app = express();      //server creat
const port = 2000;
const morgan = require('morgan');
const path = require('path');

//middleware

let myFun = (req, res , next) =>{
    if((req.query.age) >= 18){
        next();
    }else{
        res.send('sorry! you are under below age 18');
    }
}

// app.use(myFun);       //Application Level middleware
app.use(express.json()); //built in
app.use(express.urlencoded({extended:true}));  //built-in
app.use('/hello',express.static(path.join(__dirname,'./sunflower.jpg')));
// app.use(morgan('dev'));
app.get('/',myFun,(req,res) =>{
    res.send("about");
});

app.post('/',(req,res) => {
    console.log(req.body);
    res.send('post method');
})



app.listen(port, () => {
    console.log(`server start at http:/localhost:2000`);
});