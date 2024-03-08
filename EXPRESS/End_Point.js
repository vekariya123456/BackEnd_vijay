const express = require('express');
const app = express();      //server creat
const port = 2000;
const morgan = require('morgan');

const mongoose = require('mongoose');
//Database connection
async function main(){
    // await mongoose.connect('mongodb://127.0.0.1:27017/vijay1');
    await mongoose.connect('mongodb://127.0.0.1:27017/vijay2');
}
main()
.then(()=>console.log('DB is connected....'))
.catch(err => console.log(err));





//Middleware
app.use(express.json());
app.use(morgan('dev'));

// const productRoutes = require('./Routes/product.routes');
// app.use('/products',productRoutes);

// const userRoutes = require('./Routes/task.routes');
// app.use('/task',userRoutes);

// const userRoutes = require('./Routes/user.routes');
// app.use('/api/user',userRoutes);

const productRoutes = require('./Routes/product1.routes');
app.use('/api/product',productRoutes);

app.listen(port, () => {
    console.log(`server start at http:/localhost:2000`);
});