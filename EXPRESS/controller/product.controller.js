const Products = require('../model/product.model');

exports.addProduct = async (req,res) => {
    try {
        const {title,description,price,category} = req.body;
        // console.log(req.body);
        
        let newProduct = await Products.create({
            title,
            description,
            price,
            category
        });
        newProduct.save();
        res.status(201).json({Products: newProduct, message: 'New Product is Added'});
    
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
};

exports.getAllProduct = async (req,res) => {
    try {
        let products = await Products.find({isDelete: false});
        res.status(201).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
};

exports.getProduct = async (req,res) => {
    try {
        let ProductId = req.query.ProductId;
        // console.log({msg:ProductId});
        let product = await Products.findOne({_id: ProductId, isDelete:false });
        if(!product) {
            return res.status(404).json({message:'User not found'});
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.updateProduct = async (req,res) => {
    try {
        let ProductId = req.query.ProductId;
        let product = await Products.findById(ProductId);
        if(!product){
            return res.status(404).json({message: 'User not found'});
        }
        //product = await Products.findByidAndUpdate(prod1._id, {$set: {req.body}, {new: true}});
        product = await Products.findOneAndUpdate({_id:product._id}, { $set: {...req.body}},{new: true});
        res.status(200).json({product, message:'Product Updated...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }

};

exports.deleteProduct = async (req,res) => {
    try {
        const ProductId = req.query.ProductId;
        let product = await Products.findById(ProductId);
        if(!product){
            return res.status(404).json({message: 'User not found'});
        }
        // product = await Products.findOneAndDelete(product._id);
        product = await Products.findOneAndUpdate({_id:product._id}, {isDelete: true}, { new: true});
        res.status(200).json({product,message:'User Deleted...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});
    }
    };
