import React, { useState } from "react";
import authHeader from "../../Redux/Helpers/tokenHeaders";
import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../../Redux/Slices/AnswerSlice";
import { acceptAnswer } from "../../Redux/Slices/AnswerSlice";
import Pagination from "../../Components/Pagination/Pagination";
import Comment from "../Comment/Comment";
import jwt from "jwt-decode";
import moment from "moment";
import "../../Components/AnswerForm/answer.css";
import Modal from "../../Components/Modal/Modal";
import Addanswer from "../../Components/AnswerForm/AddAnswer";
export default function Answer() {
  const [show, setShow] = useState(-1);
  const [modalOpened, setModalOpened] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
  const getComentHandler = (currentIndex) => {
    if (currentIndex === show) {
      setShow(-1);
    } else {
      setShow(currentIndex);
    }
  };
  let answer=Answers[0][0]
  let pages =Answers[1]
  if (!loading) return <>Loading</>;
  return (
    <div className="conatiner_answer">
      <div className="answer_question">
        <div className="answer-box">
          <div className="question-3">
            <div>
              <h4>
                {answer?.title}
                <span>{moment(answer?.created).fromNow()}</span>
              </h4>
            </div>
            <div className="addAnswer">
              <button onClick={() => setModalOpened(true)}>
                <Modal
                  closeHandler={() => setModalOpened(false)}
                  isOpen={modalOpened}
                  modalContent={
                    <Addanswer question_id={answer?.question_id} />
                  }
                />
                Add Answer
              </button>
            </div>
          </div>
          <h5 style={{ textAlign: "left" }}> Answers</h5>
          {Answers[0]?.answer_id === null ? (
            <p> There is no answer for this question</p>
          ) : (
            Answers[0]?.map((item, index) => (
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
                  <div
                    onClick={() => {
                      getComentHandler(index);
                    }}
                  >
                    {show === index ? (
                      <i class="fas fa-minus-circle"></i>
                    ) : (
                      <i class="fa fa-plus-circle" aria-hidden="true"></i>
                    )}
                  </div>
                </div>
                <div className="comment_add">
                  {show === index ? (
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
      <div>
        <Pagination paginate={paginate} answerPages={pages} />
      </div>
    </div>
  );
}
