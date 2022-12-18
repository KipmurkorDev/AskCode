import React, { useState } from "react";
import { addComment } from "../../Redux/Slices/CommentSlice";
import { useDispatch } from "react-redux";

export default function AddComment({ answer_id }) {
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

  return (
    <div className="addtext">
      <div>
        <label htmlFor="comment_descprition">Description:</label>
        <textarea
          rows="9"
          cols="39"
          type="text"
          name="comment_descprition"
          id="comment_descprition"
          value={comment.comment_descprition}
          onChange={handleInputChange}
        />
        <div>
          <input
            type="submit"
            onClick={() => {
              validate();
            }}
          />
        </div>
      </div>
    </div>
  );
}
