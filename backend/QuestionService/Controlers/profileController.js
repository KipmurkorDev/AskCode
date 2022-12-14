const sqlConfig = require("../Config/config");
const sql = require("mssql");

const getprofile = async (req, res) => {
  try {
    const { user_id } = req.params;
    const pool = await sql.connect(sqlConfig);
    const response = await pool
      .request()
      .input("user_id", user_id)
      .execute("getProfile");
    const profile = await response.recordsets;
    res.json(profile);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deleQuestion = async (req, res) => {
  try {
    const { question_id } = req.params;
    const pool = await sql.connect(sqlConfig);
    await pool
      .request()
      .input("question_id", question_id)
      .execute("deleQuestion");
    res.json({ message: " Question deleted successfull" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deleteAnswer = async (req, res) => {
  try {
    const { answer_id } = req.params;
    const pool = await sql.connect(sqlConfig);
    await pool.request().input("answer_id", answer_id).execute("deleAnswer");
    res.json({ message: "Answer deleted successfull" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deletecomment = async (req, res) => {
  try {
    const { comment_id } = req.params;
    const pool = await sql.connect(sqlConfig);
    await pool.request().input("comment_id", comment_id).execute("deleComment");
    res.json({ message: "Comment deleted successfull" });
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
