// const express = require('express');
// const router = express.Router();

const router = require('express').Router();

const { allUsers, createUser, updateUser, deleteUser } = require('../controllers/users.controller');

router.get("/", allUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router