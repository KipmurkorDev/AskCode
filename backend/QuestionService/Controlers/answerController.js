const { exec } = require("../DatabaseHelplers/databaseHelpers");
const jwt_decode = require("jwt-decode");
const moment = require("moment");
const uuid = require("uuid");
require("dotenv").config();

const addAnswer = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const decoded = jwt_decode(token, { headers: true });
    const user_id = decoded.user_id;
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
    const { question_id, value} = req.params;
    const response = await (
      await exec("getAnswers", { question_id, value})
    ).recordsets;
    let answers = response[0];
    for (let i of response[0]) {
      i.count = 0;
      let upvote = 0;
      let downvote = 0;
      for (let j of response[1]) {
        if (i.answer_id === j.answer_id && j.Vote === true) {
          upvote += 1;
        } else if (i.answer_id === j.answer_id && j.Vote === false) {
          downvote += 1;
        } else {
          i.count = 0;
        }
        i.count = upvote - downvote;
      }
    }
    console.log(answers);
    res.json(answers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const downUpvote = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const decoded = jwt_decode(token);
    const user_id = decoded.user_id;
    const { answer_id, Vote } = req.body;
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
    const { answer_id, isAccepted } = req.body;
    await (
      await exec("acceptedAnswer", { answer_id, isAccepted })
    ).recordset;
    res.json({ message: "Accepted answer updated" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  addAnswer,
  getAnswers,
  downUpvote,
  iseacceptedAnswer,
};
