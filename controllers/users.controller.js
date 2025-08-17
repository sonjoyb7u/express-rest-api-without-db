let users = require("../models/users.model");
const {v4: uuidv4} = require('uuid');

// All User . . . 
const allUsers = (req, res) => {
    res.status(200).json({users});
}
// All User . . . 

// Create user . . . 
const createUser = (req, res) => {
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email
    };
    users.push(newUser);
    res.status(200).json({message: "User create successful", data: users});
}
// Create user . . . 

// Update user . . .
const updateUser = (req, res) => {
    const userId = req.params.id;
    const {username, email} = req.body;
    users.filter((user) => user.id === userId).map((selectedUser) => {
        selectedUser.username = username;
        selectedUser.email = email;
    })
    res.status(200).json({message: "User update successful", data: users});
} 
// Update user . . .

// Delete user . . .
const deleteUser = (req, res) => {
    const userId = req.params.id;
    // res.status(200).json(userId);
    users = users.filter((user) => user.id !== userId);
    res.status(200).json({message: "User delete successful", data: users});
} 
// Delete user . . . 

module.exports = {allUsers, createUser, updateUser, deleteUser}