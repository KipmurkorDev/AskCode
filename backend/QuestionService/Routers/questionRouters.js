const express = require("express");
const questionRouter = express.Router();
const {addQuestion, getQuestions}=require('../Controlers/index')
const {verification}=require('../Midleware/tokenVerification')

questionRouter.post('/', verification, addQuestion);
questionRouter.get('/', getQuestions);

module.exports = {
    questionRouter,
};
