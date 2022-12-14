const express = require("express");
const questionRouter = express.Router();
const {
  addQuestion,
  getQuestions,
  searchQuestions, updateQuestion, mostAnswerdQuestion
} = require("../Controlers/questionController");
const { verification } = require("../Midleware/tokenVerification");

questionRouter.get("/", getQuestions);
questionRouter.post("/", verification, addQuestion);
questionRouter.post("/search", searchQuestions);
questionRouter.put("", updateQuestion);
questionRouter.get("/most", mostAnswerdQuestion);

module.exports = {
  questionRouter,
};
