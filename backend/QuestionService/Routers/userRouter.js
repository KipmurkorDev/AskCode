const express = require("express");
const {
  getprofile,
  deleQuestion,
  deleteAnswer,
  deletecomment,
  updateQuestion, updateAnswer
} = require("../Controlers/userController");
const userRouter = express.Router();

userRouter.get("", getprofile);
userRouter.delete("/question/:question_id", deleQuestion);
userRouter.delete("/answer/:answer_id", deleteAnswer);
userRouter.delete("/comment/:comment_id", deletecomment);
// userRouter.put("/questions/question/:question_id", updateQuestion);
userRouter.patch("/answers/answer/:answer_id", updateAnswer);

module.exports = {
  userRouter,
};
