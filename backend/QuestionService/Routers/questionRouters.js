const express = require("express");
const questionRouter = express.Router();
const {
  addQuestion,
  getQuestions,
  searchQuestions,
} = require("../Controlers/questionController");
const { verification } = require("../Midleware/tokenVerification");

questionRouter.get("/", getQuestions);
questionRouter.post("/", verification, addQuestion);
questionRouter.post("/search", searchQuestions);

module.exports = {
  questionRouter,
};
