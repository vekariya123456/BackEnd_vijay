const express = require('express');
const userRoutes = express.Router();
const { addUser,
    deleteUser,
    getAllUser,
    getUser,
    replaceUser,
    updateUser
} = require('../controller/task.controller');


//Create user
userRoutes.post('/',addUser,);

//get All user 
userRoutes.get('/',getAllUser);

//get Specific user
userRoutes.get('/single-user',getUser);

//Replace single user
userRoutes.put('/replace-user',replaceUser);

//Update Single user
userRoutes.patch('/update-user',updateUser);

//Delete Single user
userRoutes.delete('/delete-user',deleteUser);

module.exports = userRoutes;