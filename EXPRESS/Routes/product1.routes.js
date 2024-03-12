const express = require('express');
const productRoutes = express.Router();
const {verifyToken }= require ('../helpers/verifyToken');
const{addProduct,
    getAllProduct,
    getProduct, 
    updateProduct, 
    deleteProduct} = require('../controller/product1.controller');



productRoutes.post('/add-product',addProduct);
productRoutes.get('/get-Allproduct',verifyToken, getAllProduct);
productRoutes.get('/get-singleproduct',verifyToken, getProduct);
productRoutes.put('/get-updateproduct',verifyToken, updateProduct);
productRoutes.delete('/get-deleteproduct',verifyToken, deleteProduct);

module.exports = productRoutes;