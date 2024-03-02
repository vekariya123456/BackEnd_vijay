const users = require('../public/user.json');


exports.addUser = (req,res) =>{
    // console.log(req.body);
    const user =req.body;
    user.push(user);
    // user.push({...req.body});
    res.status(201).json({message: 'user is added Succesfuly'}); 
};

exports.getAllUser = (req,res) => {
    res.status(200).json(users);
};

exports.getUser = (req,res) => {
    const id = +req.query.id;
    //console.log(id);
    let user = users.find((item)=> item.id === id)
    res.status(200).json(user);
};  

exports.replaceUser = (req,res) =>{
    const id = +req.query.id ;
    let userIndex = users.findIndex((item) => item.id === id);
    let user = users[userIndex];
    users.splice(userIndex, 1, {...req.body});
    // console.log(user);
    res.status(200).json({message: 'user Replace succesfully.....'});
};

exports.updateUser = (req,res) => {
    const id = +req.query.id;
    let userIndex = users.findIndex((item) => item.id === id);
    let user = users[userIndex];
    let item = users.splice(userIndex, 1, {...user, ...req.body});
    // console.log(user);
    res.status(200).json({message: 'user update succesfully.....'});
};

exports.deleteUser = (req,res) => {
    const id = +req.query.id;
    let userIndex = users.findIndex((item) => item.id === id);
    let user = users[userIndex];
    let item = users.splice(userIndex, 1);
    // console.log(user);
    res.status(200).json({message: 'user Delete succesfully.....'})
};