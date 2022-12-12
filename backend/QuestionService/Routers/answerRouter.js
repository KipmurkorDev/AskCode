const express = require("express");
const answerRouter = express.Router();
const {
  addAnswer,
  getAnswer,
  downUpvote,
} = require("../Controlers/answerController");

answerRouter.post("", addAnswer);
answerRouter.post("/:question_id", getAnswer);
answerRouter.post("/vote/:answer_id", downUpvote);

module.exports = {
  answerRouter,
};
