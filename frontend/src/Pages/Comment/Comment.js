import React, { useEffect, useState } from "react";
import { getComments } from "../../Redux/Slices/CommentSlice";
import AddComment from "../../Components/CommentForm/AddComment";
import Modal from "../../Components/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import "../../Components/CommentForm/Comment.css";
import moment from "moment";
export default function Comment({ answer_id }) {
  const [isOpened, setisOpened] = useState(false);
  const Comments = useSelector((state) => state.comment.Comments);
  const loading = useSelector((state) => state.comment.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(answer_id));
  }, [dispatch, answer_id]);
  if (!loading) return <>Loading</>;
  console.log(Comments);
  return (
    <div className="comment_">
      <div className="addcomment">
        <button onClick={() => setisOpened(true)}>
          <Modal
            closeHandler={() => setisOpened(false)}
            isOpen={isOpened}
            modalContent={<AddComment answer_id={answer_id} />}
          />
          Reply
        </button>
      </div>
      {Comments.length === 0 ? (
        <p> The is no comment for this answers</p>
      ) : (
        Comments?.map((item) => (
          <div class="comment-main-box">
            <div class="comments-box">
              <div class="comment-text-box">
                <div class="comment-text">
                  {item?.comment_descprition}
                  <span>{moment(item?.comment_created).fromNow()}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
