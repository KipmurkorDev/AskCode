const express = require("express");
const {validateUser} =require('../Middleware/Validataion')
const { getUser, addUser } = require("../Controllers/authController");
const authRouter = express.Router();

authRouter.post("/login", getUser);
authRouter.post("/signup", addUser);

module.exports = {
  authRouter,
};
