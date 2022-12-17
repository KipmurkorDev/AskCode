const express = require("express");
const {
  getprofile,
  deleQuestion,
  deleteAnswer,
  deletecomment,
} = require("../Controlers/userController");
const userRouter = express.Router();

userRouter.get("", getprofile);
userRouter.delete("/question/:question_id", deleQuestion);
userRouter.delete("/answer/:answer_id", deleteAnswer);
userRouter.delete("/comment/:comment_id", deletecomment);

module.exports = {
  userRouter,
};
