import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnswer } from "../Redux/Slices/AnswerSlice";

export default function Form({ question_id }) {
  const [formInputs, setFormInputs] = useState({
    answer_descprition: "",
  });
  const [isActive, setIsActive] = useState({});
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setFormInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = (e) => {
    if (formInputs.answer_descprition === "") {
      alert(" You did not complete  the form, kindly do so.");
    } else {
      submitHandle();
      dispatch(addAnswer({ ...formInputs, question_id: question_id }));
      clearForm();
    }
  };
  const clearForm = () => {
    setFormInputs({ answer_descprition: "" });
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
          value={formInputs.answer_descprition}
          onChange={handleInputChange}
        />
        <input
          type="submit"
          onClick={() => {
            validate();
          }}
        />
      </div>
    </div>
  );
}
