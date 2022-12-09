const sqlConfig = require("../Config/config");
const sql = require("mssql");

const getprofile = async (req, res) => {
  try {
    const user_id = req.headers.user_id;
    console.log(user_id);
    const pool = await sql.connect(sqlConfig);
    const response = await pool
      .request()
      .input("user_id", user_id)
      .execute("getProfile");
    const profile = await response.recordset;
    console.log(profile);
    res.json(profile);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getprofile,
};
