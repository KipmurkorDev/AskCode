const express = require("express");
const commentRouter = express.Router();
const {addComment,getComments, updateComment} =require('../Controlers/commentController')

commentRouter.post('',addComment)
commentRouter.get('/:answer_id', getComments)
commentRouter.put('/',updateComment)









module.exports={
    commentRouter
}