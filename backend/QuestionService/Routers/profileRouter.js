const express = require("express");
const {
  getprofile,
  deleQuestion,
  deleteAnswer,
  deletecomment,
} = require("../Controlers/profileController");
const profileRouter = express.Router();

profileRouter.get("/user", getprofile);
profileRouter.delete("/:question_id", deleQuestion);
profileRouter.delete("/answers/:answer_id", deleteAnswer);
profileRouter.delete("/comments/:comment_id", deletecomment);

module.exports = {
  profileRouter,
};
