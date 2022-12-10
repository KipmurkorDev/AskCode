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
    const { question_id, answer_id } = req.body;
    const pool = await sql.connect(sqlConfig);
    await pool
      .request()
      .input("question_id", question_id)
      .input("answer_id", answer_id)
      .execute("deleQuestion");
    res.json({ message: "deletae successfull" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getprofile,
  deleQuestion
};
