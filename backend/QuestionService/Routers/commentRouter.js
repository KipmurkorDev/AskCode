const express = require("express");
const commentRouter = express.Router();
const {addComment,getComments} =require('../Controlers/commentController')

commentRouter.post('/comment',addComment)
commentRouter.get('/comment/:answer_id', getComments)









module.exports={
    commentRouter
}