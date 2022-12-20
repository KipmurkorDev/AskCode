const express = require("express");
const questionRouter = express.Router();
const {
  addQuestion,
  getQuestions,
  searchQuestions,
  mostAnswerdQuestion,
} = require("../Controlers/questionController");
const { verification } = require("../Midleware/tokenVerification");

questionRouter.get("/",verification, getQuestions);
questionRouter.post("/", verification, addQuestion);
questionRouter.post("/search/:search_value", verification, searchQuestions);
questionRouter.get("/most/answers",verification, mostAnswerdQuestion);

module.exports = {
  questionRouter,
};
