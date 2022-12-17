import React, { useState } from "react";
import authHeader from "../../Redux/Helpers/tokenHeaders";
import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../../Redux/Slices/AnswerSlice";
import AddAnswer from "../../Components/AnswerForm/AddAnswer";
import { acceptAnswer } from "../../Redux/Slices/AnswerSlice";
import Comment from "../Comment/Comment";
import jwt from "jwt-decode";
import moment from "moment";
import "../../Components/AnswerForm/answer.css";
export default function Answer() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const Answers = useSelector((state) => state.answer.Answers);
  const loading = useSelector((state) => state.answer.isLoading);
  const token = authHeader()["x-access-token"];
  const decode = jwt(token, { headers: true });
  const user_id = decode.user_id;
  const handleupdVote = (item) => {
    let newitem = { ...item, Vote: 1 };
    dispatch(addVote(newitem));
  };
  const handleAccepted = (data) => {
    dispatch(acceptAnswer(data));
  };
  const updateAcepted = (data) => {
    dispatch(acceptAnswer(data));
  };
  const handledownvote = (item) => {
    let newitem = { ...item, Vote: 0 };
    dispatch(addVote(newitem));
  };
  console.log(Answers);
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
                <AddAnswer question_id={Answers[0]?.question_id} />
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
                    <span style={{ paddingLeft: "2px" }}>
                      {item.count}
                      {item?.isAccepted === true ? (
                        <i
                          class="fa fa-check"
                          style={{
                            color: "green",
                            fontSize: "20px",
                            paddingLeft: "6px",
                          }}
                        ></i>
                      ) : null}
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
                    <div className="answer-div">
                      {item?.answer_descprition}
                      <b>
                        <span>{moment(item.answer_created).fromNow()}</span>
                      </b>
                    </div>
                    {user_id === item.user_id ? (
                      <div className="btn-accept">
                        <button>
                          <i
                            onClick={() => {
                              handleAccepted({
                                ...item,
                                isAccepted: 1,
                              });
                            }}
                            className="fa fa-check"
                            style={{
                              color: "green",
                              fontSize: "14px",
                            }}
                          ></i>
                        </button>
                        <button>
                          <i
                            onClick={() => {
                              updateAcepted({
                                ...item,
                                isAccepted: 0,
                              });
                            }}
                            className="fa fa-times"
                            aria-hidden="true"
                            style={{
                              color: "red",
                              fontSize: "15px",
                            }}
                          ></i>
                        </button>
                      </div>
                    ) : null}
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
