require("dotenv").config();
const { exec } = require("../DatabaseHelplers/databaseHepler");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const addUser = async (req, res) => {
  try {
    const user_id = uuid.v4();
    const { Name, user_name, email, user_password } = req.body;
    const user = await (await exec("getuser", { email })).recordset[0];
    if (!user) {
      const hashpaword = await bcrypt.hash(user_password, 8);
      await exec("adduser", {
        user_id,
        Name,
        user_name,
        email,
        user_password: hashpaword,
      });
      return res.status(200).json({message:"success"});
    } else {
      res.json({ message: "User Already registered" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
const getUser = async (req, res) => {
  try {
    const { email, user_password } = req.body;
    const user = await (await exec("getuser", { email })).recordset[0];
    if (user) {
      const confirmpassword = await bcrypt.compare(
        user_password,
        user.user_password
      );
      if (confirmpassword) {
        const token = jwt.sign(
          { email: user.email,user_id: user.user_id, user_password: user.user_password },
          process.env.SECRET,
          { expiresIn: "2h" }
        );
        res.status(200).send({ token });
      } else {
        return res.status(400).json({ message: "Wrong Cridentials" });
      }
    } else {
      return res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getUser,
  addUser,
};
