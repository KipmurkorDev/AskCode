import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnswers } from "../../Redux/Slices/AnswerSlice";
import { getQuestions } from "../../Redux/Slices/QuestionSlice";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

const MostAnswer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Questions = useSelector((state) => state.question.MostAnswer);
  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  const handleAnswers = (question_id) => {
    dispatch(getAnswers(question_id));
    navigate("/answers");
  };
  return (
    <div className="conatiner_home">
      <div>
        <div className="home-btn">
          <div className="most_question">All </div>
          <div className="most_answer">
            <Link to="/most/Answers" className="link_home">
              Most Answered
            </Link>
          </div>
        </div>
        <div className="question">
          {Questions.length === 0 ? (
            <p> There is no questions </p>
          ) : (
            Questions?.map((item) => (
              <div
                className="question-1"
                onClick={() => handleAnswers(item?.question_id)}
              >
                <div className="answe-count"> Answers:{item.count}</div>
                <div>
                  <button>
                    <p>
                      {item?.title}
                      <b>
                        <span>{moment(item?.created).fromNow()}</span>
                      </b>
                    </p>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MostAnswer;
