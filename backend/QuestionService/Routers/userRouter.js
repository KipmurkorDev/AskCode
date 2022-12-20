const express = require("express");
const {
  getprofile,
  deleQuestion,
  deleteAnswer,
  deletecomment,
  updateQuestion, updateAnswer, updateComment
} = require("../Controlers/userController");
const { verification } = require("../Midleware/tokenVerification");

const userRouter = express.Router();

userRouter.get("",verification, getprofile);
userRouter.delete("/question/:question_id",verification, deleQuestion);
userRouter.delete("/answer/:answer_id",verification, deleteAnswer);
userRouter.delete("/comment/:comment_id", verification, deletecomment);
userRouter.put("/questions/question/:question_id", verification,updateQuestion);
userRouter.patch("/answers/answer/:answer_id", verification, updateAnswer);
userRouter.patch('/comments/comment/:comment_id',verification,updateComment)


module.exports = {
  userRouter,
};
