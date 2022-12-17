const express = require("express");
const { getUser, addUser } = require("../Controllers/authController");
const authRouter = express.Router();

authRouter.post("/login", getUser);
authRouter.post("/signup", addUser);

module.exports = {
  authRouter,
};
