import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnswer } from "../../Redux/Slices/AnswerSlice";
const Addanswer = ({question_id}) => {
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

  const validate = (e) => {
    if (answerInput.answer_descprition === "") {
      alert(" You did not complete  the form, kindly do so.");
    } else {
      dispatch(addAnswer({ ...answerInput, question_id: question_id }));
      clearForm();
    }
  };
  const clearForm = () => {
    setAnswerInput({ answer_descprition: "" });
  };
  return (
    <div className="addtext">
      <div >
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
}


export default Addanswer;