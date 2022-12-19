const express = require("express");
const questionRouter = express.Router();
const {
  addQuestion,
  getQuestions,
  searchQuestions,
  mostAnswerdQuestion,
} = require("../Controlers/questionController");
const { verification } = require("../Midleware/tokenVerification");

questionRouter.get("/", getQuestions);
questionRouter.post("/", verification, addQuestion);
questionRouter.post("/search/:search_value", searchQuestions);
questionRouter.get("/most/answers", mostAnswerdQuestion);

module.exports = {
  questionRouter,
};
