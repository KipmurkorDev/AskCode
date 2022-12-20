import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateComment } from "../../Redux/Slices/userSlice";
import { addAnswer } from "../../Redux/Slices/AnswerSlice";
import { updateAnswer } from "../../Redux/Slices/userSlice";
const Addanswer = ({ question_id, list, obj }) => {
  const [answerInput, setAnswerInput] = useState({answer_descprition: ""});
  const [errors, setErrors] = useState("");
  const [comment, setComment] = useState({ comment_descprition: "" });
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setAnswerInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setComment((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    setAnswerInput({ answer_descprition: list?.answer_descprition });
  }, [question_id, list]);
  useEffect(() => {
    setComment({ comment_descprition: obj?.comment_descprition });
  }, [obj]);
  const validate = () => {
    if (answerInput.answer_descprition === "") {
      setErrors("All Fields Are Required!");
    }  else if (obj) {
      dispatch(updateComment({ ...obj, comment_descprition:comment.comment_descprition }));
    } else if (list?.answer_id === undefined) {
      dispatch(addAnswer({ ...answerInput, question_id: question_id }));
      clearForm();
    }
    else {
      let newItem = { ...list, ...answerInput };
      console.log(newItem);
      dispatch(updateAnswer(newItem));
    }
  };
  const clearForm = () => {
    setAnswerInput("");
  };
  return (
    <div className="addtext">
      <div>
        <label htmlFor="answer_descprition">Description:</label>
        <textarea
          rows="9"
          cols="39"
          type="text"
          name="answer_descprition"
          id="answer_descprition"
          value={answerInput.answer_descprition || comment.comment_descprition}
          onChange={handleInputChange}
        />
        <div>
        {errors ? <p style={{ color: "red", fontSize:"13px"}}>{errors}</p> : null}
          <input
            type="submit"
            onClick={() => {
              validate();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Addanswer;
