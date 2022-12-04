import React, { useState } from "react";

export default function Form({ sendData }) {
  const [formInputs, setFormInputs] = useState({
    description: "",
  });
  const [isActive, setIsActive] = useState({});

  const handleInputChange = (e) => {
    setFormInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = (e) => {
    if (formInputs.description === "") {
      alert(" You did not complete  the form, kindly do so.");
    } else {
      submitHandle();
      console.log(formInputs);
      sendData(formInputs);
      clearForm();
    }
  };
  const clearForm = () => {
    setFormInputs({ description: "" });
  };

  const submitHandle = () => {
    setIsActive({
      visibility: "hidden",
      opacity: "0",
    });
  };

  const handleModal = () => {
    setIsActive({
      visibility: "visible",
      opacity: "1",
    });
  };
  return (
    <div className="addtext">
      <input type="checkbox" id="click" />

      <label htmlFor="click" className="click-me" onClick={handleModal}>
        Add Answer
      </label>

      <div className="content" style={isActive}>
        <label htmlFor="description">Description:</label>
        <textarea
          rows="9"
          cols="39"
          type="text"
          name="description"
          id="description"
          value={formInputs.description}
          onChange={handleInputChange}
        />
        <input
          type="submit"
          onClick={() => {
            validate();
          }}
        />
      </div>
    </div>
  );
}
