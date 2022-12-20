import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registeUser } from "../../Redux/Slices/AuthSlice";

import "./signup.css";

export default function Signup() {
  const message = useSelector((state) => state.auth.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUpInput, setSignup] = useState({
    Name: "",
    user_name: "",
    email: "",
    user_password: "",
  });
  const handleInputChange = (e) => {
    setSignup((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const validataion = async () => {
    if (
      signUpInput.Name === "" ||
      signUpInput.user_name === "" ||
      signUpInput.email === "" ||
      signUpInput.user_password === ""
    ) {
      alert(" You missed");
    } else {
       dispatch(registeUser(signUpInput));
      if (message?.message.length < 8) {
        console.log(message?.message);
        clearForm();
        return navigate("/");
      } else {
        console.log("hello");
        return navigate("/signup");
      }
    }
  };

  const clearForm = () => {
    setSignup({
      Name: "",
      user_name: "",
      email: "",
      user_password: "",
    });
  };

  return (
    <div className="form">
      <div className="title">
        <h1>Welcome, Please Signup</h1>
      </div>
      <div className="ic1">
        <div className="input-container">
          <label htmlFor="user" className="placeholder">
            Name:
          </label>
          <input
            id="user"
            className="input"
            type="text"
            name="Name"
            value={signUpInput.Name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="user" className="placeholder">
            User Name:
          </label>
          <input
            id="user"
            className="input"
            type="text"
            name="user_name"
            value={signUpInput.user_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="email" className="placeholder">
            Email:
          </label>
          <input
            id="email"
            className="input"
            type="email"
            name="email"
            value={signUpInput.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="placeholder">
            Password:
          </label>
          <input
            id="password"
            className="input"
            type="password"
            name="user_password"
            value={signUpInput.user_password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <p style={{ color: "red" }}>{message.message}</p>
          <p>
            Are you already register? You can <Link to="/">Login</Link>
          </p>

          <button
            type="text"
            className="submit"
            onClick={() => {
              validataion();
            }}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
