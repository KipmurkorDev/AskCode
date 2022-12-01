const sqlConfig = require("../Config/Config");
const sql = require("mssql");
require("dotenv").config();
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



const addUser = async (req, res) => {
  try {
    const user_id = uuid.v4();
    const { Name, user_name, email, user_password } = req.body;
    const pool = await sql.connect(sqlConfig);
    const hashpaword = await bcrypt.hash(user_password, 8);
    await pool
      .request()
      .input("user_id", user_id)
      .input("Name", Name)
      .input("user_name", user_name)
      .input("email", email)
      .input("user_password", hashpaword)
      .execute("adduser");
    return res.status(201).send({ message: "User Added Successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
const getUser = async (req, res) => {
  try {
    const { email, user_password } = req.body;
    const pool = await sql.connect(sqlConfig);
    const user = await (
      await pool.request().input("email", email).execute("getuser")
    ).recordset[0];
    if (user) {
      const confirmpassword = await bcrypt.compare(
        user_password,
        user.user_password
      );
      if (confirmpassword) {
        const token = jwt.sign(
          { email: user.email, user_password: user.user_password },
          process.env.SECRET,
          { expiresIn: "2h" }
        );
        res.status(200).send({ token, user_id:user.user_id});
      } else {
        return res.status(400).json({ message: "wrong  password" });
      }
    } else {
      return res.status(400).json({ message: "User Not Found" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getUser,
  addUser,
};
