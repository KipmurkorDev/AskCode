const express = require("express");
const commentRouter = express.Router();
const {addComment,getComments} =require('../Controlers/commentController')

commentRouter.post('',addComment)
commentRouter.post('/:answer_id', getComments)









module.exports={
    commentRouter
}