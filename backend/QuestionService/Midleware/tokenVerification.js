const jwt = require("jsonwebtoken");
require("dotenv").config();

const verification = (req, res, next) => {
  // const token = req.headers["x-access-token"];
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtbWFudWVsa2lwbXVya29yQGdtYWlsLmNvbSIsInVzZXJfcGFzc3dvcmQiOiIkMmIkMDgkaGFFd2xzRFlXVjlqSG5IVVI5UFNLZUduVXlnelVNTEFqYTNLOUZRNmN0SEQ4QWtYb3ZIMUMiLCJpYXQiOjE2NzA5Mjg5NjgsImV4cCI6MTY3MDkzNjE2OH0.7wHmqBLFxHmtJ3RwGV99WNGouKh7pEujUClHqyC9BmU"
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.email = decoded.email;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = {
  verification,
};
