const express = require('express');
const userRoutes = express.Router();
const{registerUser,
    loginUser,
    // getUser,
    // updateUser, 
    // deleteUser
} = require('../controller/user.controller');

userRoutes.post('/register-user',registerUser);
userRoutes.post('/login-user',loginUser);
// userRoutes.get('/get-user',getUser);
// userRoutes.put('/update-user',updateUser);
// userRoutes.delete('/delete-user',deleteUser);

module.exports = userRoutes;