import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnswer } from "../Redux/Slices/AnswerSlice";

export default function Form({ question_id }) {
  const [answerInput, setAnswerInput] = useState({
    answer_descprition: "",
  });
  const [isActive, setIsActive] = useState({});
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setAnswerInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = (e) => {
    if (answerInput.answer_descprition === "") {
      alert(" You did not complete  the form, kindly do so.");
    } else {
      submitHandle();
      dispatch(addAnswer({ ...answerInput, question_id: question_id }));
      clearForm();
    }
  };
  const clearForm = () => {
    setAnswerInput({ answer_descprition: "" });
  };

  const submitHandle = () => {
    setIsActive({
      visibility: "hidden",
      opacity: "0",
    });
  };

  const handleModal = () => {
    setIsActive({
      visibility: "visible",
      opacity: "1",
    });
  };
  return (
    <div className="addtext">
      <input type="checkbox" id="click" />

      <label htmlFor="click" className="click-me" onClick={handleModal}>
        Add Answer
      </label>

      <div className="content" style={isActive}>
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
        <div> <input
          type="submit"
          onClick={() => {
            validate();
          }}
        /></div>
      </div>
    </div>
  );
}
