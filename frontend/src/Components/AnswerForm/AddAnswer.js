import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateComment } from "../../Redux/Slices/userSlice";
import { addAnswer } from "../../Redux/Slices/AnswerSlice";
import { updateAnswer } from "../../Redux/Slices/userSlice";
const Addanswer = ({ question_id, list, obj }) => {
  const [answerInput, setAnswerInput] = useState({ answer_descprition: "" });
  const [errors, setErrors] = useState("");
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setAnswerInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    setAnswerInput({ answer_descprition: list?.answer_descprition });
  }, [question_id, list]);
  
  const validate = () => {
    if (answerInput.answer_descprition === "") {
      setErrors("All Fields Are Required!");
    }  else if (list?.answer_id === undefined) {
      dispatch(addAnswer({ ...answerInput, question_id: question_id }));
      setAnswerInput({ answer_descprition: "" });
    } else {
      let newItem = { ...list, ...answerInput };
      console.log(newItem);
      dispatch(updateAnswer(newItem));
      setAnswerInput({ answer_descprition: "" });
    }
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
          value={answerInput.answer_descprition}
          onChange={handleInputChange}
        />
        <div>
          {errors ? (
            <p style={{ color: "red", fontSize: "13px" }}>{errors}</p>
          ) : null}
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
