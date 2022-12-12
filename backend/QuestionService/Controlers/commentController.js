const sqlConfig = require("../Config/config");
const sql = require("mssql");
const uuid = require("uuid");
const moment = require("moment");

require("dotenv").config();

const addComment = async (req, res) => {
  try {
    const user_id = req.headers["user_id"];
    const comment_id = uuid.v4();
    const comment_created = moment().format();
    const { question_id, comment_descprition, answer_id } = req.body;
    const pool = await sql.connect(sqlConfig);
    await pool
      .request()
      .input("user_id", user_id)
      .input("answer_id", answer_id)
      .input("question_id", question_id)
      .input("comment_id", comment_id)
      .input("comment_descprition", comment_descprition)
      .input("comment_created", comment_created)
      .execute("insertUpdateComment");
    res.status(201).json({ message: "Answerr Inserted to database" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getComments = async (req, res) => {
  try {
    const { answer_id } = req.params;
    const pool = await sql.connect(sqlConfig);
    const response = await pool
      .request()
      .input("answer_id", sql.VarChar(100), answer_id)
      .execute("getComments");
    const comments = await response.recordset;
    res.json(comments);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  addComment,
  getComments,
};
