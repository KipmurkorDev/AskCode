const express = require("express");
const questionRouter = express.Router();
const {addQuestion, getQuestions}=require('../Controlers/questionController')
const {verification}=require('../Midleware/tokenVerification')

questionRouter.post('/', verification, addQuestion);
questionRouter.get('/', getQuestions);

module.exports = {
    questionRouter,
};
