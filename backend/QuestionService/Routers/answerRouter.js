const express = require("express");
const answerRouter = express.Router();
// const {verification}=require('../Midleware/tokenVerification')
const { updateAnswer,addAnswer, getAnswer}=require('../Controlers/answerController')

answerRouter.post('', addAnswer);
answerRouter.post('/:question_id', getAnswer);
answerRouter.put('/:answer_id', updateAnswer);




module.exports={
    answerRouter
}