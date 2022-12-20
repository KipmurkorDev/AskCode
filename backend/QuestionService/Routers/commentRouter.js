const express = require("express");
const commentRouter = express.Router();
const {addComment,getComments} =require('../Controlers/commentController')
const { verification } = require("../Midleware/tokenVerification");

commentRouter.post('/comment',verification, addComment)
commentRouter.get('/comment/:answer_id',verification, getComments)









module.exports={
    commentRouter
}