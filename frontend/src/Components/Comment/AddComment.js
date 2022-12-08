import React, { useState } from "react";
import { addComment } from "../Redux/Slices/CommentSlice";
import { useDispatch } from "react-redux";
import './Comment.css'

export default function AddComment({answer_id}) {
  const dispatch=useDispatch()
  const [comment, setComment] = useState({
    description: "",
  });
  const [open, setClose] = useState({});

  const handleInputChange = (e) => {
    setComment((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = (e) => {
    if (comment.description === "") {
      alert(" You did not complete  the form, kindly do so.");
    } else {
      submitHandle1();
      dispatch(addComment({...comment, answer_id:answer_id}))
      clearForm();
    }
  };
  const clearForm = () => {
    setComment({description: "" });
  };

  const submitHandle1 = () => {
    setClose({
      visibility: "hidden",
      opacity: "0",
    });
  };

  const handleModal1 = () => {
    setClose({
      visibility: "visible",
      opacity: "1",
    });
  };
  return (
    <div className="addtext1">
      <input type="checkbox" id="click1" />

      <label htmlFor="click1" className="click-me1" onClick={handleModal1}>
        Comment
      </label>

      <div className="content-comment1" style={open}>
        <label htmlFor="description">Description:</label>
        <textarea
          rows="9"
          cols="90%"
          type="text"
          name="description"
          id="description"
          value={comment.description}
          onChange={handleInputChange}
        />
        <div> <input
          type="submit"
          onClick={() => {
            validate();
          }}
        /></div>
      </div>
    </div>
  );
}
