const { exec } = require("../DatabaseHelplers/databaseHelpers");
const jwt_decode = require('jwt-decode');
const moment = require("moment");
const uuid = require("uuid");
require("dotenv").config();

const addAnswer = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const decoded=jwt_decode(token, { headers: true });
    const user_id=decoded.user_id
    const answer_id = uuid.v4();
    const answer_created = moment().format();
    const { answer_descprition, question_id } = req.body;
    await (
      await exec("insertUpdateAnswer", {
        user_id,
        answer_id,
        answer_descprition,
        answer_created,
        question_id,
      })
    ).recordset;

    res.status(201).json({ message: "Answer Inserted to database" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getAnswers = async (req, res) => {
  try {
    const { question_id } = req.params;
    const response = await (await exec("getAnswers", { question_id })).recordsets;
    let answers=response[0]
    for (let i of response[0]){
      for(let j of response[1]){
        let count=0
        if(i.user_id===j.user_id&&i.answer_id==j.answer_id){
            count++
        }
        i.count=count
      }
    }
    res.json(answers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const downUpvote = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const decoded=jwt_decode(token);
    const user_id=decoded.user_id
    const { answer_id,Vote } = req.body;
    await (
      await exec("inserUpdateVote", {
        user_id,
        answer_id,
        Vote,
      })
    ).recordset;

    res.status(201).json({ message: "Your vote counted" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const iseacceptedAnswer = async (req, res) => {
  try {
    const { answer_id } = req.body;
    await (
      await exec("acceptedAnswer", { answer_id })
    ).recordset;
    res.json({ message: "Accepted answer updated" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const updateAnswer = async (req, res) => {
  try {
    const {
      user_id,
      answer_id,
      answer_descprition,
      question_id,
      answer_created,
    } = req.body;
    const answerExist = await (
      await exec("getAnswer", { answer_id })
    ).recordset;

    if (answerExist.length) {
      await (
        await exec("insertUpdateAnswer", {
          answer_id,
          user_id,
          answer_descprition,
          question_id,
          answer_created,
        })
      ).recordset;

      res.status(201).json({ message: "Answer updated to database" });
    } else {
      res.status(201).json({ message: "Answer not existing in the database" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = {
  addAnswer,
  getAnswers,
  downUpvote,
  iseacceptedAnswer,
  updateAnswer,
};
