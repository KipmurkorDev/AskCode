const sqlConfig = require("../Config/config");
const moment = require("moment");
const sql = require("mssql");
const uuid = require("uuid");
require("dotenv").config();

const addQuestion = async (req, res) => {
  try {
    // const user_id = req.headers["user_id"];
    const question_id = uuid.v4();
    const created = moment().format();
    const { user_id, title, description } = req.body;
    const pool = await sql.connect(sqlConfig);
    await pool
      .request()
      .input("user_id", user_id)
      .input("question_id", question_id)
      .input("title", title)
      .input("description", description)
      .input("created", created)
      .execute("insertUpdateQuestion");

    res.status(201).json({ message: "Question Inserted to database" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getQuestions = async (req, res) => {
  try {
    const user_id = req.body;

    const pool = await sql.connect(sqlConfig);
    const response = await pool.request().execute("getQuestions");
    const questions = await response.recordset;
    res.json(questions);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const searchQuestions = async (req, res) => {
  try {
    const { search_value } = req.body;
    const pool = await sql.connect(sqlConfig);
    const response = await pool
      .request()
      .input("search_value", search_value)
      .execute("getsearchQuestions");
    const searches = await response.recordset;
    res.json(searches);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const updateQuestion = async (req, res) => {
  try {
    const { user_id, question_id, title, description, created } = req.body;
    const pool = await sql.connect(sqlConfig);
    await pool
      .request()
      .input("user_id", user_id)
      .input("question_id", question_id)
      .input("title", title)
      .input("description", description)
      .input("created", created)
      .execute("insertUpdateQuestion");
    res.json({ message: "Question updated successfull" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const mostAnswerdQuestion=async (req, res) => {
  try {

    const pool = await sql.connect(sqlConfig);
    const response = await pool.request().execute("mostAnswerQuestion");
    const questions = await response.recordset;
    res.json(questions);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = {
  addQuestion,
  getQuestions,
  searchQuestions,
  updateQuestion,
  mostAnswerdQuestion
};
