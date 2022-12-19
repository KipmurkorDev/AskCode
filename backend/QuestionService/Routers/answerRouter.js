const express = require("express");
const answerRouter = express.Router();
const {
  addAnswer,
  getAnswers,
  downUpvote,
  iseacceptedAnswer
} = require("../Controlers/answerController");

answerRouter.post("", addAnswer);
answerRouter.put("/answer/accepted", iseacceptedAnswer);
answerRouter.get("/question/:question_id", getAnswers);
answerRouter.post("/answer/vote/:answer_id", downUpvote);

module.exports = {
  answerRouter,
};
