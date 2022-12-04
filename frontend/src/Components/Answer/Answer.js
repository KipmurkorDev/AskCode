import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./answer.css";
import Form from "./AddAnswer";
import Comment from "./Comment";

export default function Answer() {
  const element = <FontAwesomeIcon icon={faAngleUp} />;
  const element2 = <FontAwesomeIcon icon={faAngleDown} />;

  return (
    <div className="conatiner_answer">
      <div className="answer_question">
        <div className="answer-box">
          <div className="question-3">
            <div>
              <h4>
                How can I print the number as elements of a list without the
                quotes and square brackets should be their?
              </h4>
            </div>
            <button>
              <Form />
            </button>
          </div>
          <h5 style={{ textAlign: "left" }}> Answers</h5>
          <div className="answe_1">
            <div className="content-1">
              <div className="btn">
                <button>2{element} </button> <button> {element2}5</button>
              </div>
              <div>
                <p>
                  Hello is first recorded in the early 1800s, but was originally
                  used to attract attention or express surprise (“Well, hello!
                  What do we have here?”). But the true breakthrough for this
                  now-common word was when
                </p>
              </div>
            </div>

            <div className="comment-btn">
              <button><Comment/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
