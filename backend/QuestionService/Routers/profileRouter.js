const express = require("express");
const { getprofile } = require("../Controlers/profileController");
const profileRouter = express.Router();

profileRouter.post('',getprofile)









module.exports={
    profileRouter
}