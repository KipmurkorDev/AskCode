const express = require("express");
const answerRouter = express.Router();
const {
  addAnswer,
  getAnswers,
  downUpvote,
  iseacceptedAnswer, updateAnswer
} = require("../Controlers/answerController");

answerRouter.post("", addAnswer);
answerRouter.get("/question/:question_id", getAnswers);
answerRouter.post("/answer/vote/:answer_id", downUpvote);
answerRouter.put("answer/accepted", iseacceptedAnswer);
answerRouter.put("/answer/:answer_id", updateAnswer);

module.exports = {
  answerRouter,
};
