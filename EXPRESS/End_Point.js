const express = require('express');
const app = express();      //server creat
const port = 2000;
const morgan = require('morgan');


//Middleware
app.use(express.json());
app.use(morgan('dev'));

const productRoutes = require('./Routes/product.routes');
app.use('/products',productRoutes);

app.listen(port, () => {
    console.log(`server start at http:/localhost:2000`);
});