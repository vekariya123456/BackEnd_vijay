const express = require('express');
const productRoutes = express.Router();
const { addproducts,
    deleteProduct,
    getAllProducts,
    getProduct,
    replaceProduct,
    updateProduct
} = require('../controller/product.controller');


//Create Product
productRoutes.post('/',addproducts,);

//get All Product 
productRoutes.get('/',getAllProducts);

//get Specific Product
productRoutes.get('/single-product',getProduct);

//Replace single Product
productRoutes.put('/replace-product',replaceProduct);

//Update Single Product
productRoutes.patch('/update-product',updateProduct);

//Delete Single Product
productRoutes.delete('/delete-product',deleteProduct);

module.exports = productRoutes;