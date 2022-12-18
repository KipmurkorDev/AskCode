import React, { useEffect, useState } from "react";
import { getComments } from "../../Redux/Slices/CommentSlice";
import { addComment } from "../../Redux/Slices/CommentSlice";
import { useSelector, useDispatch } from "react-redux";
import "./Comment.css";
import moment from "moment";
export default function Comment({ answer_id }) {
  const Comments = useSelector((state) => state.comment.Comments);
  const loading = useSelector((state) => state.comment.isLoading);
  const dispatch = useDispatch();
  const [comment, setComment] = useState({
    comment_descprition: "",
  });
  const handleInputChange = (e) => {
    setComment((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(comment);
  const validate = (e) => {
    if (comment.comment_descprition === "") {
      alert(" You did not complete  the form, kindly do so.");
    } else {
      dispatch(addComment({ ...comment, answer_id: answer_id }));
      clearForm();
    }
  };
  const clearForm = () => {
    setComment({ comment_descprition: "" });
  };
  useEffect(() => {
    dispatch(getComments(answer_id));
  }, [dispatch, answer_id]);
  if (!loading) return <>Loading</>;
  return (
    <div className="comment_">
      <div className="addcomment">
        <input
          type="text"
          name="comment_descprition"
          id="comment_descprition"
          placeholder="add reply"
          value={comment.comment_descprition}
          onChange={handleInputChange}
        />
        <input
          type="submit"
          onClick={() => {
            validate();
          }}
        />
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
