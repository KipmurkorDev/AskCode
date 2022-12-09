const express = require("express");
const bodyParser = require('body-parser')
const { questionRouter } = require("./Routers/questionRouters");
const {answerRouter}=require('./Routers/answerRouter')
const {commentRouter}=require('./Routers/commentRouter')
const cors = require("cors");
const { profileRouter } = require("./Routers/profileRouter");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(bodyParser.json())
app.use(cors());
app.use("/questions", questionRouter);
app.use("/answers", answerRouter);
app.use("/comments", commentRouter);
app.use("/profile", profileRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Backend runinng....... on ${port}`);
});
