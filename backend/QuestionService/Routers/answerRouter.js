const express = require("express");
const answerRouter = express.Router();
const {
  addAnswer,
  getAnswers,
  downUpvote,
  iseacceptedAnswer
} = require("../Controlers/answerController");
const { verification } = require("../Midleware/tokenVerification");

answerRouter.post("", addAnswer);
answerRouter.put("/answer/accepted",verification, iseacceptedAnswer);
answerRouter.get("/question/:question_id/:value",verification, getAnswers);
answerRouter.post("/answer/vote/:answer_id", verification,downUpvote);

module.exports = {
  answerRouter,
};
