import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addQuestion} from '../../Redux/Slices/QuestionSlice'
import { updateQuestion } from "../../Redux/Slices/userSlice";
import "./ask.css";
export default function Askform({obj}) {
  const [errors, setErrors] = useState("");
  const naviagate = useNavigate();
  const dispatch=useDispatch()
  const [question, setQuestion] = useState({
    title: "",
    description: "",
  });
  useEffect(() => {
    setQuestion({ title: obj?.title, description:obj?.description});
  }, [obj]);
  const handleInputChange = (e) => {
    setQuestion((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const validataion = () => {
    if (!question.title || !question.description) {
      setErrors("All Fields Are Required!");
    } else if(obj?.question_id === undefined){
      dispatch(addQuestion(question))
      clearForm();
      naviagate("/home");
    }
    else{
      let newQuiz={...obj, ...question}
      dispatch(updateQuestion(newQuiz))

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
          {errors ? <p style={{ color: "red", fontSize:"13px"}}>{errors}</p> : null}
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
