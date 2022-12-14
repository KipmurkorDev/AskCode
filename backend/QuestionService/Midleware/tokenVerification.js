const jwt = require("jsonwebtoken");
require("dotenv").config();

const verification = (req, res, next) => {
  // const token = req.headers["x-access-token"];
const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtbWFudWVsa2lwbXVya29yQGdtYWlsLmNvbSIsInVzZXJfcGFzc3dvcmQiOiIkMmIkMDgkaGFFd2xzRFlXVjlqSG5IVVI5UFNLZUduVXlnelVNTEFqYTNLOUZRNmN0SEQ4QWtYb3ZIMUMiLCJpYXQiOjE2NzA5MTIxNjUsImV4cCI6MTY3MDkxOTM2NX0.B5W4zPJTguBRtgCsL0qXFedzPXuBEeR_klQk5CcntqQ'
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
