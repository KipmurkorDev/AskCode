const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const { authRouter } = require("./Routers/authRouter");

app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);
const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`Backend runinng....... on ${port}`);
});
