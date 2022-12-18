import React, { useEffect } from "react";
import { getComments } from "../../Redux/Slices/CommentSlice";
import { useSelector, useDispatch } from "react-redux";
import "./Comment.css";
import moment from "moment";
import CommentBox from "../../Components/CommentBox/CommentBox";
export default function Comment({ answer_id }) {
  const Comments = useSelector((state) => state.comment.Comments);
  const loading = useSelector((state) => state.comment.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments(answer_id));
  }, [dispatch, answer_id]);
  if (!loading) return <>Loading</>;
  return (
    <div className="comment_">
      <div className="addcomment">
      <CommentBox answer_id={answer_id}/>
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
