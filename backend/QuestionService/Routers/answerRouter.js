const express = require("express");
const answerRouter = express.Router();
const {
  addAnswer,
  getAnswer,
  downUpvote,
  iseacceptedAnswer, updateAnswer
} = require("../Controlers/answerController");

answerRouter.post("", addAnswer);
answerRouter.get("/:question_id", getAnswer);
answerRouter.post("/vote/:answer_id", downUpvote);
answerRouter.put("/accepted", iseacceptedAnswer);
answerRouter.put("/", updateAnswer);

module.exports = {
  answerRouter,
};
