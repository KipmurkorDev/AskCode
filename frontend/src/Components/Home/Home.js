import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../Redux/Slices/QuestionSlice";
import "./Home.css";
export default function Home() {
  const dispatch = useDispatch();
  const Questions = useSelector((state) => state.question.Questions);
  console.log(Questions);
  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);
  function handlesearch(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      alert("Enter was pressed was presses");
    }
  }
  return (
    <div className="conatiner_home">
      <div className="search_btn">
        <input
          id="search"
          type="text"
          name="search"
          // value="hello"
          // onChange=""
          placeholder="search"
          onKeyDown={handlesearch}
        />
      </div>

      <div>
        <div className="question">
          {Questions.map((item) => (
            <div className="question-1">
              <div>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
