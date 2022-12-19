import React, { useState } from "react";
import Profile from "./Profile";
import Modal from "../../Components/Modal/Modal";
import Addanswer from "../../Components/AnswerForm/AddAnswer";
import { useSelector, useDispatch } from "react-redux";
import { deleteAnswer } from "../../Redux/Slices/userSlice";
import moment from "moment";
export default function UserAnswer() {
  const [isOpen, setIsopen] = useState(false);
  const [isItem, setIsItem]=useState({})
  const user = useSelector((state) => state.user.Profile);
  const loading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();
  const handleitem = (item) => {
   setIsItem(item)
  }
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
            {user[2]?.userAnswers?.map((item, index) => (
              <div className="user-answer">
                <div className="usercontent">
                  {item?.answer_descprition}
                  <b>
                    <span>{moment(item?.answer_created).fromNow()}</span>
                  </b>
                </div>
                <div className="editbtn">
                  <div className="btn_user" onClick={() => {setIsopen(true); handleitem(item)}}>
                    <Modal
                      closeHandler={() => setIsopen(false)}
                      isOpen={isOpen}
                      modalContent={<Addanswer list={isItem} />}
                    />
                    <i class="fas fa-edit"></i>
                  </div>
                  <div className="btn_user">
                    <i
                      class="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => dispatch(deleteAnswer(item?.answer_id))}
                    ></i>
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
