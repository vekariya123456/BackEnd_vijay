const express = require('express');
const productRoutes = express.Router();
const{addProduct,getAllProduct,getProduct, updateProduct, deleteProduct} = require('../controller/product1.controller');



productRoutes.post('/add-product',addProduct);
productRoutes.get('/get-Allproduct',getAllProduct);
productRoutes.get('/get-singleproduct',getProduct);
productRoutes.put('/get-updateproduct',updateProduct);
productRoutes.delete('/get-deleteproduct',deleteProduct);

module.exports = productRoutes;