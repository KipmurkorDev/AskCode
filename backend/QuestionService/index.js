const express = require("express");
const bodyParser = require('body-parser')
const { questionRouter } = require("./Routers/questionRouters");
const {answerRouter}=require('./Routers/answerRouter')
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(bodyParser.json())
app.use(cors());
app.use("/questions", questionRouter);
app.use("/answers", answerRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Backend runinng....... on ${port}`);
});
