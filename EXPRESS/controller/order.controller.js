const Order  = require('../model/order.model');
const Cart = require('../model/cart.model');

//ADD NEW ORDER
exports.newOrder = async (req, res) => {
    try {
        let cartItems = await Cart.find({ user: req.user._id,isDelete: false }).populate('cartItem');
        // res.send(cartItems);
        let OrderItems = cartItems.map(item => ({
            product: item.cartItem._id,
            quantity: item.quantity,
            price: item.cartItem.price
        }));
        console.log(OrderItems);
        let totalPrice = OrderItems.reduce((total, item) => total + (item.price * item.quantity), 100);
        console.log(totalPrice);
        let newOrder = await Order.create({
            user: req.user._id,
            items: OrderItems,
            totalAmount: totalPrice
        });
        newOrder.save();
        await Cart.updateMany({ user: req.user._id}, { $set: { isDelete: true}});
        res.status(201).json({ Order: newOrder, message: 'Order Place Succesfully'});
  

    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};


// GET ALL ORDER
exports.getAllOrders = async (req, res) => {
    try {
        let orders = await Order.find({user: req.user._id, isDelete: false});
        res.status(201).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'}); 
    }
};

//GET SPECIFIC ORDER
exports.getOrder = async (req, res) => {
    try {
        let order = await Order.findOne({ _id:req.query.orderId, isDelete: false });
        if(!order){
            return res.status(404).json({message:'Order not Found'});;
        }
       res.status(201).json(order);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'}); 
    }
};

// DELETE ORDER
exports.deleteOrder = async (req, res) => {
    try {
        let orderId = req.query.orderId;
        let order = await Order.findById({ _id:req.query.orderId, isDelete: false });
        if(!order){
            return res.status(404).json({message:'Order not Found'});;
        }
        order = await Order.findByIdAndUpdate({_id: orderId} , {isDelete: true} , {new: true})
       res.status(201).json({order, message:'order deleted...'}
       );
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'}); 
    }
};

