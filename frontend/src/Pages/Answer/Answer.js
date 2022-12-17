import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../../Redux/Slices/AnswerSlice";
import Form from "../../Components/Answer/AddAnswer";
import Comment from "../Comment/Comment";
import moment from "moment";
import '../../Components/Answer/answer.css'
export default function Answer() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const Answers = useSelector((state) => state.answer.Answers);
  const loading = useSelector((state) => state.answer.isLoading);

  const handleupdVote = (item) => {
    let newitem = { ...item, Vote: 1 };
    dispatch(addVote(newitem));
  };
  const handledownvote = (item) => {
    let newitem = { ...item, Vote: 0 };
    dispatch(addVote(newitem));
  };
  const getComentHandler = () => {
    setShow((prev) => !prev);
  };
  if (!loading) return <>Loading</>;
  return (
    <div className="conatiner_answer">
      <div className="answer_question">
        <div className="answer-box">
          <div className="question-3">
            <div>
              <h4>
                {Answers[0]?.title}
                <span>{moment(Answers[0]?.created).fromNow()}</span>
              </h4>
            </div>
            <div className="addAnswer">
              <button>
                <Form question_id={Answers[0]?.question_id} />
              </button>
            </div>
          </div>
          <h5 style={{ textAlign: "left" }}> Answers</h5>
          {Answers[0]?.answer_id === null ? (
            <p> There is no answer for this question</p>
          ) : (
            Answers?.map((item) => (
              <div className="answe_1">
                <div className="content-1">
                  <div className="btn">
                    <button
                      onClick={() => {
                        handleupdVote(item);
                      }}
                    >
                      <i
                        class="fas fa-caret-up"
                        style={{ fontSize: "40px" }}
                      ></i>
                    </button>
                    <span style={{ paddingLeft: "2px" }}>{item.count}
                        {item?.isAccepted === true ? (
                        <i class="fa fa-check"></i>
                      ) : (
                        <i
                          class="fa fa-check"
                          style={{ color: "green", fontSize: "20px", paddingLeft:"6px" }}
                        ></i>
                      )}
                    </span>
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
                    <p>
                      {item?.answer_descprition}{" "}
                      <span>{moment(item.answer_created).fromNow()}</span>{" "}
                    </p>
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
                  {show ? (
                    <Comment
                      answer_id={item?.answer_id}
                      question_id={item?.question_id}
                    />
                  ) : null}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
