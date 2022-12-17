import React from "react";
import Profile from "../../Components/UserProfile/Profile";
import { useSelector, useDispatch } from "react-redux";
import { deleteAnswer } from "../../Redux/Slices/userSliceProfile";
export default function UserAnswer() {
  const user = useSelector((state) => state.profile.Profile);
  const loading = useSelector((state) => state.profile.isLoading);
  const dispatch = useDispatch();

  if (!loading) return <>Loading</>;
  return (
    <div className="container-profile">
      <div className="user-profile-6">
        <Profile />
      </div>
      <div className="answers">
        {user[2]?.userAnswers?.length === 0 ? (
          <p> You have no Answers posted recently </p>
        ) : (
          <div className="answe-0">
            {user[2]?.userAnswers?.map((item) => (
              <div className="user-answer">
                <div className="usercontent"> {item?.answer_descprition}</div>
                <div className="editbtn">
                  <div className="btn_user">
                    <i class="fas fa-edit"></i>
                  </div>
                  <div
                    className="btn_user"
                    onClick={() => dispatch(deleteAnswer(item?.answer_id))}
                  >
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
