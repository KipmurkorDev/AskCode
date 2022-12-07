const sqlConfig = require("../Config/config");
const sql = require("mssql");
const uuid = require("uuid");
require("dotenv").config();

const addAnswer = async (req, res) => {
  try {
    const user_id = req.headers["user_id"];
    const answer_id = uuid.v4();
    const { answer_descprition, question_id} = req.body;
    const pool = await sql.connect(sqlConfig);
    await pool
      .request()
      .input("user_id", user_id)
      .input("question_id", question_id)
      .input("answer_id", answer_id)
      .input("answer_descprition", answer_descprition)
      .execute("insertUpdateAnswer");

    res.status(201).json({ message: "Answerr Inserted to database" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getAnswer = async (req, res) => {
  try {
    const {question_id}=req.params
    const pool = await sql.connect(sqlConfig);
    const response = await pool.request()
    .input("question_id",sql.VarChar(100), question_id)
    .execute("getAnswer");
    const answers = await response.recordset;
    res.json(answers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports={
    addAnswer, getAnswer
}
