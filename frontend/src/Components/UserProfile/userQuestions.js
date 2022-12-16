import React from "react";
import Profile from "./Profile";
import { useSelector, useDispatch } from "react-redux";
import { deleteQuestion } from "../Redux/Slices/userSliceProfile";
export default function UserQuestions() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.Profile);
  const loading = useSelector((state) => state.profile.isLoading);

  const deletequestion = (data) => {
    console.log(data);
    dispatch(deleteQuestion(data));
  };
  if (!loading) return <>Loading</>;
  return (
    <div className="container-profile">
      <div className="user-profile-6">
        <Profile />
      </div>
      <div className="answers">
        {user[1]?.userQuestions?.length === 0 ? (
          <p> You have no Questions posted recently </p>
        ) : (
          <div className="answe-0">
            {user[1]?.userQuestions?.map((item) => (
              <div className="user-answer">
                <div className="usercontent"> {item?.title}</div>
                <div className="editbtn">
                  <div className="btn_user">
                    <i class="fas fa-edit"></i>
                  </div>
                  <div
                    className="btn_user"
                    onClick={() => deletequestion(item)}
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
