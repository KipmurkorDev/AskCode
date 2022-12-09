import React, { useEffect } from "react";
import { getComments } from "../Redux/Slices/CommentSlice";
import AddComment from "./AddComment";
import { useSelector, useDispatch } from "react-redux";

export default function Comment({ answer_id }) {
  const Comments = useSelector((state) => state.comment.Comments);
  const loading = useSelector((state) => state.comment.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(answer_id));
  }, [dispatch, answer_id]);
  console.log(Comments);
  if (!loading) return <>Loading</>;

  return (
    <div className="comment_">
      <div className="addcomment">
        <button><AddComment answer_id={answer_id} /></button>
      </div>
      {Comments.map((item) => (
          <div class="comment-main-box">
          <div class="comments-box">
            <div class="comment-text-box">
              <div class="comment-text">{item.comment_descprition}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
