const express = require("express");
const { getUser, addUser } = require("../Controllers/userController");
const userRouter = express.Router();

userRouter.post("/login", getUser);
userRouter.post("/signup", addUser);

module.exports = {
  userRouter,
};
