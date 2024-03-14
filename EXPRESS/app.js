require('dotenv').config();
const express = require('express');
const app = express();      //server creat
const port = process.env.PORT;
const morgan = require('morgan');

const mongoose = require('mongoose');
//Database connection
async function main(){
    await mongoose.connect(process.env.MONGO_DB_URL);
    // await mongoose.connect('mongodb://127.0.0.1:27017/vijay1');
    // await mongoose.connect('mongodb://127.0.0.1:27017/vijay2');
    await mongoose.connect('mongodb+srv://vijayvekariya007:Vijay%40123@cluster0.xveeq6w.mongodb.net/developer');
}
main()
.then(()=>console.log('DB is connected....'))
.catch(err => console.log(err));



//Middleware
app.use(express.json());
app.use(morgan('dev'));


const userRoutes = require('./Routes/user.routes');
const { config } = require('dotenv');
app.use('/api/user',userRoutes);

const productRoutes = require('./Routes/product.routes');
app.use('/api/product',productRoutes);

const cartRoutes = require('./Routes/cart.routes');
app.use('/api/cart',cartRoutes);

const orderRoutes = require('./Routes/order.routes');
app.use('/api/order',orderRoutes);

app.listen(port, () => {
    console.log(`server start at http:/localhost:2000`);
});