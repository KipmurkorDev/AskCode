import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnswers } from "../../Redux/Slices/AnswerSlice";
import {
  getmostAsnswers,
  getQuestions,
  searchQuestions,
} from "../../Redux/Slices/QuestionSlice";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import Pagination from "../../Components/Pagination/Pagination";
const MostAnswer = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState({ search_value: "" });
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const Questions = useSelector((state) => state.question.MostAnswer);
  useEffect(() => {
    dispatch(getmostAsnswers(currentPage));
  }, [dispatch, currentPage]);
  const handleInputChange = (e) => {
    setSearch((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handlesearch = () => {
    if (search.search_value) {
      dispatch(searchQuestions(search));
      navigate("/searches");
    } else {
      alert(" nothing to search");
    }
  };
  const handleAnswers = (question_id) => {
    dispatch(getAnswers(question_id));
    navigate("/answers");
  };
  return (
    <div className="conatiner_home">
      <div className="search_btn">
        <input
          id="search"
          type="text"
          name="search_value"
          value={search.search_value}
          onChange={handleInputChange}
          placeholder="search"
        />
        <button onClick={handlesearch}>
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
      <div className="home_display">
        <div className="home-btn">
          <div
            className="most_question"
            onClick={() => {
              dispatch(getQuestions(1));
              navigate("/home");
            }}
          >
            All{" "}
          </div>
          <div className="most_answer">
            <Link to="/most/Answers" className="link_home">
              Most Answered
            </Link>
          </div>
        </div>
        <div className="question">
          {Questions[0]?.length === 0 ? (
            <p> There is no questions </p>
          ) : (
            Questions[0]?.map((item) => (
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
      <div>
        <Pagination paginate={paginate} mostPages={Questions[1]} />
      </div>
    </div>
  );
};

export default MostAnswer;
