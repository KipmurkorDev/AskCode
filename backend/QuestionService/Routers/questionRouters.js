const express = require("express");
const questionRouter = express.Router();
const {
  addQuestion,
  getQuestions,
  searchQuestions,
  mostAnswerdQuestion,
} = require("../Controlers/questionController");
const { verification } = require("../Midleware/tokenVerification");

questionRouter.get("/:PageNumber",verification, getQuestions);
questionRouter.post("/", verification, addQuestion);
questionRouter.post("/search/:search_value", verification, searchQuestions);
questionRouter.get("/most/answers/:PageNumber",verification, mostAnswerdQuestion);

module.exports = {
  questionRouter,
};
