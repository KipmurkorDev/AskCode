import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./user.css";
export default function Profile() {
  const Profile = useSelector((state) => state.profile.Profile);
  const loading = useSelector((state) => state.profile.isLoading);

  if (!loading) return <>Loading</>;
  return (
    <div className="container-profile">
      <div className="performances">
        <h1> Your Performances </h1>
        <div className="comment-profile">
          <div>
            <p> Questions {Profile[1]?.userQuestions?.length}</p>
          </div>
          <div>
            <p> Answers {Profile[2]?.userAnswers?.length}</p>
          </div>
          <div>
            <p> Comments {Profile[3]?.userComments?.length}</p>
          </div>
        </div>
        <div className="profile-content">
          <Link to="/profile">
            <button className="focus-btn">My profile </button>
          </Link>
          <Link to="/userquestions">
            <button className="focus-btn">Questions</button>
          </Link>
          <Link to="/useranswer">
            <button className="focus-btn">Answers</button>
          </Link>
          <Link to="/usercomments">
            <button className="focus-btn">Comments</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
