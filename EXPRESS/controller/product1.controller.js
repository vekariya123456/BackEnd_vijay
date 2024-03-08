const Product = require('../model/product1.model');

exports.addProduct = async (req,res) => {
    try {
        const {title,description,price,category} = req.body;
        // console.log(req.body);
        
        let newProduct = await Product.create({
            title,
            description,
            price,
            category
        });
        newProduct.save();
        res.status(201).json({Product: newProduct, message: 'New Product is Added'});
    
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
};

exports.getAllProduct = async (req,res) => {
    try {
        let products = await Product.find({isDelete: false});
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
        let prod1 = await Product.findOne({_id: ProductId, isDelete:false });
        if(!prod1) {
            return res.status(404).json({message:'User not found'});
        }
        res.status(200).json(prod1);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.updateProduct = async (req,res) => {
    try {
        let ProductId = req.query.ProductId;
        let prod1 = await Product.findById(ProductId);
        if(!prod1){
            return res.status(404).json({message: 'User not found'});
        }
        //prod1 = await Product.findByidAndUpdate(prod1._id, {$set: {req.body}, {new: true}});
        prod1 = await Product.findOneAndUpdate({_id:prod1._id}, { $set: {...req.body}},{new: true});
        res.status(200).json({prod1, message:'Product Updated...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }

};

exports.deleteProduct = async (req,res) => {
    try {
        const ProductId = req.query.ProductId;
        let prod1 = await Product.findById(ProductId);
        if(!prod1){
            return res.status(404).json({message: 'User not found'});
        }
        // prod1 = await Product.findOneAndDelete(prod1._id);
        prod1 = await Product.findOneAndUpdate({_id:prod1._id}, {isDelete: true}, { new: true});
        res.status(200).json({prod1,message:'User Deleted...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});
    }
    };
