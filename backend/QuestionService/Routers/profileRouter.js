const express = require("express");
const { getprofile, deleQuestion } = require("../Controlers/profileController");
const profileRouter = express.Router();

profileRouter.post('/:user_id',getprofile)

profileRouter.delete('',deleQuestion)








module.exports={
    profileRouter
}