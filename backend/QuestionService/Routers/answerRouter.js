const express = require("express");
const answerRouter = express.Router();
// const {verification}=require('../Midleware/tokenVerification')
const {addAnswer, getAnswer}=require('../Controlers/answerController')

answerRouter.post('', addAnswer);

answerRouter.post('/:question_id', getAnswer);




module.exports={
    answerRouter
}