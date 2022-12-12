import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addQuestion} from '../Redux/Slices/QuestionSlice'
import "./ask.css";
export default function Askform() {
  const naviagate = useNavigate();
  const dispatch=useDispatch()
  const [question, setQuestion] = useState({
    title: "",
    description: "",
  });
  const handleInputChange = (e) => {
    setQuestion((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const validataion = () => {
    if (question.title === "" || question.description === "") {
      alert(" You missed");
    } else {
      dispatch(addQuestion(question))
      clearForm();
      naviagate("/home");
    }
  };

  const clearForm = () => {
    setQuestion({
      title: "",
      description: "",
    });
  };

  return (
    <div className="conatiner">
      <div className="form-3">
        <div className="title-3">
          <h1>Ask a Public Question </h1>
        </div>
        <div className="ic3">
          <div className="title_">
            <label htmlFor="title" className="placeholder-3">
              Title:
            </label>
            <input
              id="title"
              className="input-3"
              type="text"
              name="title"
              value={question.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="textarea">
            <label htmlFor="description" className="placeholder-3">
              Descriptions:
            </label>
            <textarea
              rows="10"
              type="text"
              name="description"
              id="description"
              className="input-3"
              value={question.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container-3">
            <button
              type="text"
              className="submit-3"
              onClick={() => {
                validataion();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
