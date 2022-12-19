import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAnswer } from "../../Redux/Slices/AnswerSlice";
import { updateAnswer } from "../../Redux/Slices/userSlice";
const Addanswer = ({ question_id, item }) => {
  const [answerInput, setAnswerInput] = useState({
    answer_descprition: "",
  });
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setAnswerInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    setAnswerInput({answer_descprition:item?.answer_descprition})
    
  }, []);
  const validate = (e) => {
    if (answerInput.answer_descprition === "") {
      alert(" You did not complete  the form, kindly do so.");
    } else if (item?.answer_id===undefined) {
      dispatch(addAnswer({ ...answerInput, question_id: question_id }));
      clearForm();
    } else {
      let newItem={ ...item, ...answerInput }
      console.log(newItem);
      dispatch(updateAnswer(newItem));
    }
  };
  const clearForm = () => {
    setAnswerInput({ answer_descprition: "" });
  };
  return (
    <div className="addtext">
      <div>
        <label htmlFor="answer_descprition">Description:</label>
        <textarea
          rows="9"
          cols="39"
          type="text"
          name="answer_descprition"
          id="answer_descprition"
          value={answerInput.answer_descprition}
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
};

export default Addanswer;
