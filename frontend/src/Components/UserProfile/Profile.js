import React from "react";
import { Link } from "react-router-dom";
import "./user.css";
// import Userprofile from "./Userprofile";
export default function Profile() {
  return (
    
    <div className="container-profile">
       
      <div className="performances">
        <h1> Your Performances </h1>
        <div className="comment-profile">
          <div>
            <p> Question 20</p>
          </div>
          <div>
            <p> Answers 30</p>
          </div>
          <div>
            <p> Comments 0</p>
          </div>
        </div>
        <div className="profile-content">
          <Link to="/profile" >
            <button className="focus-btn">My profile </button>
            
          </Link>
          <Link to="/userquestions">
            <button className="focus-btn">Questions</button>
          </Link>
          <Link to="/useranswer">
            <button className="focus-btn">Answers</button>
          </Link>
      </div>
      </div>
      
    </div>
  );
}
