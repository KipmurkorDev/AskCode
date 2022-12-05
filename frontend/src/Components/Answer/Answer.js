import React from "react";

import "./answer.css";
import Form from "./AddAnswer";
import AddComment from "./AddComment";
import Comment from "./Comment";
export default function Answer() {
  return (
    <div className="conatiner_answer">
      <div className="answer_question">
        <div className="answer-box">
          <div className="question-3">
            <div>
              <h4>
                How can I print the number as elements of a list without the
                quotes and square brackets should be their? <b> <sub>3 days ago </sub></b>
              </h4>
            </div>
            <div className="addAnswer"> <button>
              <Form />
            </button>
            </div>
            
          </div>
          <h5 style={{ textAlign: "left" }}> Answers</h5>
          <div className="answe_1">
            <div className="content-1">
              <div className="btn">
                <button>
                  4<i class="fas fa-caret-up" style={{ fontSize: "40px" }}></i>{" "}
                </button>
               <span style={{paddingLeft:"2px"}}>-1</span> 
                <button>
                  <i class="fas fa-caret-down" style={{ fontSize: "40px" }}></i>
                  5
                </button>
              </div>
              <div>
                <p>
                  Hello is first recorded in the early 1800s, but was originally
                  used to attract attention or express surprise (“Well, hello!
                  What do we have here?”)?   <b> <sub>3 days ago </sub></b>
                </p>
              </div>
            </div>

            <div className="comment-btn">
              <button>
                <AddComment/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
