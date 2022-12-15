const { exec } = require("../DatabaseHelplers/databaseHelpers");
const moment = require("moment");
const uuid = require("uuid");
require("dotenv").config();

const addAnswer = async (req, res) => {
  try {
    const user_id = req.headers["user_id"];
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

const getAnswer = async (req, res) => {
  try {
    const { question_id } = req.params;
    const answers = await (await exec("getAnswer", { question_id })).recordset;
    res.json(answers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const downUpvote = async (req, res) => {
  try {
    const { user_id, question_id, answer_id, upvote, downvote } = req.body;
    await (
      await exec("inserUpdateVote", {
        user_id,
        question_id,
        answer_id,
        upvote,
        downvote,
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
      await exec("getAnswers", { answer_id })
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
  getAnswer,
  downUpvote,
  iseacceptedAnswer,
  updateAnswer,
};
