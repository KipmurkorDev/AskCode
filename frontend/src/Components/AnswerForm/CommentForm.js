import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateComment } from "../../Redux/Slices/userSlice";
const Addcomment = ({ obj }) => {
  const [errors, setErrors] = useState("");
  const [comment, setComment] = useState({ comment_descprition: "" });
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setComment((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    setComment({ comment_descprition: obj?.comment_descprition });
  }, [obj]);
  const validate = () => {
    if (comment.comment_descprition === "") {
      setErrors("All Fields Are Required!");
    } else {
      dispatch(
        updateComment({
          ...obj,
          comment_descprition: comment.comment_descprition,
        })
      );
      setComment({comment_descprition:""})
    }
  };
  console.log(obj);
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
          {errors ? (
            <p style={{ color: "red", fontSize: "13px" }}>{errors}</p>
          ) : null}
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
};

export default Addcomment;
