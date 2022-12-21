import { useSelector, useDispatch } from "react-redux";
import React, {useState} from "react";
import Addcomment from "../../Components/AnswerForm/CommentForm";
import Modal from "../../Components/Modal/Modal";
import { deleteComment } from "../../Redux/Slices/userSlice";
import Profile from "./Profile";
import moment from "moment";
export default function UserComment() {
  const [isOpen, setIsopen] = useState(false);
  const user = useSelector((state) => state.user.Profile);
  const [isItem, setIsItem] = useState({});
  const loading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();
  const handleitem = (item) => {
    setIsItem(item);
  };
  if (!loading) return <>Loading</>;
  return (
    <>
      <div className="container-profile">
        <div className="user-profile-6">
          <Profile />
        </div>
        <div className="answers">
          {user[3]?.userComments?.length === 0 ? (
            <p> You have no comments posted recently </p>
          ) : (
            <div className="answe-0">
              {user[3]?.userComments?.map((item) => (
                <div className="user-answer">
                  <div className="usercontent">
                    {item?.comment_descprition}{" "}
                    <b>
                      <span>{moment(item?.comment_created).fromNow()}</span>
                    </b>
                  </div>
                  <div className="editbtn">
                    <div
                      className="btn_user"
                      onClick={() => {
                        setIsopen(true);
                        handleitem(item);
                      }}
                    >
                      <Modal
                        closeHandler={() => setIsopen(false)}
                        isOpen={isOpen}
                        modalContent={<Addcomment obj={isItem} />}
                      />
                      <i class="fas fa-edit"></i>
                    </div>
                    <div
                      className="btn_user"
                      onClick={() => dispatch(deleteComment(item?.comment_id))}
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
    </>
  );
}
