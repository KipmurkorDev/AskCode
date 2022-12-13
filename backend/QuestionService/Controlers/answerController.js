const sqlConfig = require("../Config/config");
const sql = require("mssql");
const moment = require("moment");
const uuid = require("uuid");
require("dotenv").config();

const addAnswer = async (req, res) => {
  try {
    // const user_id = req.headers["user_id"];
    const answer_id = uuid.v4();
    const answer_created = moment().format();
    const {user_id,  answer_descprition, question_id } = req.body;
    const pool = await sql.connect(sqlConfig);
    await pool
      .request()
      .input("user_id", user_id)
      .input("question_id", question_id)
      .input("answer_id", answer_id)
      .input("answer_descprition", answer_descprition)
      .input("answer_created", answer_created)
      .execute("insertUpdateAnswer");

    res.status(201).json({ message: "Answer Inserted to database" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getAnswer = async (req, res) => {
  try {
    const { question_id } = req.params;
    const pool = await sql.connect(sqlConfig);
    const response = await pool
      .request()
      .input("question_id", sql.VarChar(100), question_id)
      .execute("getAnswer");
    const answers = await response.recordset;
    res.json(answers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const downUpvote = async (req, res) => {
  try {
    const { user_id, question_id, answer_id, upvote, downvote } = req.body;
    const pool = await sql.connect(sqlConfig);
    await pool
      .request()
      .input("user_id", user_id)
      .input("answer_id", answer_id)
      .input("question_id", question_id)
      .input("upvote", upvote)
      .input("downvote", downvote)
      .execute("inserUpdateVote");
    res.status(201).json({ message: "Your vote counted" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const iseacceptedAnswer=async (req, res) => {
  try {
    const {answer_id}  = req.body;
    const pool = await sql.connect(sqlConfig);
    await pool
      .request()
      .input("answer_id", answer_id)
      .execute("acceptedAnswer");
    res.json({ message: "Accepted answer updated" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}
const updateAnswer = async (req, res) => {
  try {
  
    const { user_id, answer_id, answer_descprition, question_id , answer_created} = req.body;
    const pool = await sql.connect(sqlConfig);
    await pool
      .request()
      .input("user_id", user_id)
      .input("question_id", question_id)
      .input("answer_id", answer_id)
      .input("answer_descprition", answer_descprition)
      .input("answer_created", answer_created)
      .execute("insertUpdateAnswer");

    res.status(201).json({ message: "Answer updated to database" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = {
  addAnswer,
  getAnswer,
  downUpvote,
  iseacceptedAnswer,
  updateAnswer
};
