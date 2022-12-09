import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAnswer } from "../Redux/Slices/AnswerSlice";
import Form from "./AddAnswer";
import Comment from "../Comment/Comment";
import "./answer.css";

export default function Answer() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const Answers = useSelector((state) => state.answer.Answers);
  const loading = useSelector((state) => state.answer.isLoading);
  const handleupdVote = (item) => {
    let newItem = { ...item, upvote: item.upvote + 1 };
    dispatch(updateAnswer(newItem));
  };
  const handledownvote = (item) => {
    let newItem = { ...item, downvote: item.downvote + 1 };
    dispatch(updateAnswer(newItem));
  };
  const getComentHandler = () => {
    setShow((prev) => !prev);
  };
  console.log(Answers);
  if (!loading) return <>Loading</>;
  return (
    <div className="conatiner_answer">
      <div className="answer_question">
        <div className="answer-box">
          <div className="question-3">
            <div>
              <h4>
                {Answers[0]?.title}
                <b>
                  <sub>3 days ago </sub>
                </b>
              </h4>
            </div>
            <div className="addAnswer">
              <button>
                <Form question_id={Answers[0]?.question_id} />
              </button>
            </div>
          </div>
          <h5 style={{ textAlign: "left" }}> Answers</h5>
          {Answers.map((item) => (
            <div className="answe_1">
              <div className="content-1">
                <div className="btn">
                  <button
                    onClick={() => {
                      handleupdVote(item);
                    }}
                  >
                    <i class="fas fa-caret-up" style={{ fontSize: "40px" }}></i>
                  </button>
                  <span style={{ paddingLeft: "2px" }}>5</span>
                  <button
                    onClick={() => {
                      handledownvote(item);
                    }}
                  >
                    <i
                      class="fas fa-caret-down"
                      style={{ fontSize: "40px" }}
                    ></i>
                  </button>
                </div>
                <div className="anwer_details">
                  <p>{item?.answer_descprition} </p>
                </div>
              </div>

              <div className="comment-btn">
                <button
                  onClick={() => {
                    getComentHandler();
                  }}
                >
                  {show ? <span>Hide</span> : <span>Comments</span>}
                </button>
              </div>
              <div className="comment_add">
                {show ? <Comment answer_id={item.answer_id} /> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
