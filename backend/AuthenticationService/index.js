const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const { userRouter } = require("./Routers/userRouter");

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`Backend runinng....... on ${port}`);
});
