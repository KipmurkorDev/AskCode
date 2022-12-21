const { exec } = require("../DatabaseHelplers/databaseHelpers");
const jwt_decode = require("jwt-decode");

const getprofile = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const decoded = jwt_decode(token);
    const user_id = decoded.user_id;
    const response = await (await exec("getProfile", { user_id })).recordsets;
    let user = { user: response[0] };
    let userQuestions = { userQuestions: response[1] };
    let userAnswers = { userAnswers: response[2] };
    let userComments = { userComments: response[3] };
    let profile = [user, userQuestions, userAnswers, userComments];
    res.json(profile);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deleQuestion = async (req, res) => {
  try {
    const { question_id } = req.params;
    const exist = await (await exec("getQuestion", { question_id })).recordset;
    if (exist.length) {
      await (
        await exec("deleQuestion", { question_id })
      ).recordsets;
      res.json({ message: "Question deleted successfull" });
    } else {
      res.json({ message: " Question already deleted " });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const updateQuestion = async (req, res) => {
  try {
    const { user_id, question_id, title, description, created } = req.body;
    const questionsExist = await (
      await exec("getQuestion", { question_id })
    ).recordset;
    if (questionsExist.length) {
      await (
        await exec("insertUpdateQuestion", {
          user_id,
          question_id,
          title,
          description,
          created,
        })
      ).recordset;
      res.status(200).json({ message: "Question updated on database" });
    } else {
      res.status(201).json({ message: "Question does not exist" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deleteAnswer = async (req, res) => {
  try {
    const { answer_id } = req.params;
    const exist = await (await exec("getAnswer", { answer_id })).recordset;

    if (exist.length) {
      await (
        await exec("deleAnswer", { answer_id })
      ).recordset;
      res.status(200).json({ message: "Answer deleted successfull" });
    } else {
      res.status(200).json({ message: " Answer already deleted " });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const updateAnswer = async (req, res) => {
  try {
    const {
      user_id,
      answer_id,
      answer_descprition,
      question_id,
      answer_created,
    } = req.body;
    const answerExist = await (
      await exec("getAnswer", { answer_id })
    ).recordset;
    if (answerExist.length) {
      await (
        await exec("insertUpdateAnswer", {
          answer_id,
          user_id,
          answer_descprition,
          question_id,
          answer_created,
        })
      ).recordset;

      res.status(200).json({ message: "Answer updated to database" });
    } else {
      res.status(201).json({ message: "Answer not existing in the database" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deletecomment = async (req, res) => {
  try {
    const { comment_id } = req.params;
    const exist = await (await exec("getComment", { comment_id })).recordset;
    if (exist.length) {
      await (
        await exec("deleComment", { comment_id })
      ).recordset;
      res.status(200).json({ message: "Comment deleted successfull" });
    } else {
      res.status(201).json({ message: " Comment already deleted " });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const updateComment = async (req, res) => {
  try {
    const {
      user_id,
      comment_id,
      question_id,
      comment_created,
      comment_descprition,
      answer_id,
    } = req.body;
    const commentExist = await (
      await exec("getComment", { comment_id })
    ).recordset;
    if (commentExist.length) {
      await (
        await exec("insertUpdateComment", {
          answer_id,
          question_id,
          user_id,
          comment_id,
          comment_created,
          comment_descprition,
        })
      ).recordset;
      res.status(200).json({ message: "Comment updated in the database" });
    } else {
      res.status(201).json({ message: "Comment not existing in the database" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = {
  getprofile,
  deleQuestion,
  deleteAnswer,
  deletecomment,
  updateQuestion,
  updateAnswer,
  updateComment,
};
