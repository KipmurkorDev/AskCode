const { exec } = require("../DatabaseHelplers/databaseHelpers");
const jwt_decode = require('jwt-decode');

const getprofile = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const decoded=jwt_decode(token);  
    const user_id=decoded.user_id   
    const profile = await (await exec("getProfile", { user_id })).recordsets;
    res.json(profile);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deleQuestion = async (req, res) => {
  try {
    const { question_id } = req.params;
    const exist = await (await exec("getQuestion", { question_id })).recordset;
    if (exist.length) {
      await (
        await exec("deleQuestion", { question_id })
      ).recordsets;
      res.json({ message: "Question deleted successfull" });
    } else {
      res.json({ message: " Question already deleted " });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deleteAnswer = async (req, res) => {
  try {
    const { answer_id } = req.params;
    const exist = await (await exec("getAnswers", { answer_id })).recordset;

    if (exist.length) {
      await (
        await exec("deleAnswer", { answer_id })
      ).recordset;
      res.json({ message: "Answer deleted successfull" });
    } else {
      res.json({ message: " Answer already deleted " });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deletecomment = async (req, res) => {
  try {
    const { comment_id } = req.params;
    const exist = await (await exec("getComment", { comment_id })).recordset;
    console.log(exist);
    if (exist.length) {
      await (
        await exec("deleComment", { comment_id })
      ).recordset;
      res.json({ message: "Comment deleted successfull" });
    } else {
      res.json({ message: " Comment already deleted " });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getprofile,
  deleQuestion,
  deleteAnswer,
  deletecomment,
};
