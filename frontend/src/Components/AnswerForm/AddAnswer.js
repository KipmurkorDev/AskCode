import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateComment } from "../../Redux/Slices/userSlice";
import { addAnswer } from "../../Redux/Slices/AnswerSlice";
import { updateAnswer } from "../../Redux/Slices/userSlice";
const Addanswer = ({ question_id, list, obj }) => {
  const [answerInput, setAnswerInput] = useState({
    answer_descprition: "",
  });
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
    console.log(obj?.comment_id?.length);
    if (answerInput.answer_descprition === "") {
      alert(" You did not complete  the form, kindly do so.");
    }  else if (obj?.comment_id?.length > 0) {
      dispatch(updateComment({ ...obj, comment_descprition:comment.comment_descprition }));
      clearForm();
    } else if (list?.answer_id === undefined) {
      dispatch(addAnswer({ ...answerInput, question_id: question_id }));
      clearForm();
    }
    else {
      let newItem = { ...list, ...answerInput };
      console.log(newItem);
      dispatch(updateAnswer(newItem));
      clearForm();
    }
  };
  const clearForm = () => {
    setAnswerInput({ answer_descprition: "" });
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
