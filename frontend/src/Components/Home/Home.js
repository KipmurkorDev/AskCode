import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../Redux/Slices/QuestionSlice";
import { useNavigate } from "react-router-dom";
import "./Home.css";
export default function Home() {
  const dispatch = useDispatch();
  const navigate =useNavigate()
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
  const handleAnswers=()=>{
    navigate("/answers")
  }
  return (
    <div className="conatiner_home">
      <div className="search_btn">
        <input
          id="search"
          type="text"
          name="search"
          // value="hello"
          onChange=""
          placeholder="search"
          onKeyDown={handlesearch}
        />
      </div>

      <div>

        <div className="question">
        <h3 style={{textAlign:"left", width:"70%", margin:"0px"}}> Questions</h3>

          {/* {Questions.map((item) => ( */}
          <div className="question-1" onClick={handleAnswers}>
            <div>
              <button>
                <p>
                  How can I print the number as elements of a list without the
                  quotes and square brackets should be their? <b> <sub>3 days ago </sub></b>
                </p>
              </button>
              <button>
                <p>
                  How can I print the number as elements of a list without the
                  quotes and square brackets should be their? <b> <sub>3 days ago </sub></b>
                </p>
              </button>
              {/* <p>{item.title}</p> */}
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
}
