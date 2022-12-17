import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './sign.css'
 import {getUser} from '../../Redux/Slices/UserSlice'
 import { useDispatch } from "react-redux";



export default function Login() {
  const naviagate = useNavigate();
  const dispatch=useDispatch()
  const [siginIput, setSiginIput] = useState({
    email: "",
    user_password: "",
  });
  const handleInputChange = (e) => {
    setSiginIput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validataion = () => {
    if (siginIput.email === "" || siginIput.user_password === "") {
      alert(" You missed");
    } else {
      dispatch(getUser(siginIput))
      clearForm();
      naviagate("/home");
    }
  };

  const clearForm = () => {
    setSiginIput({
      email: "",
      user_password: "",
    });
  };

  return (
    <div className="form-2">
      <div className="title-2">
        <h1>Welcome Back, Please sign</h1>
      </div>
      <div className="ic2">
        <div className="input-container-2">
          <label htmlFor="email" className="placeholder-2">
            Email:
          </label>
          <input
            id="email"
            className="input-2"
            type="email"
            name="email"
            value={siginIput.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container-2">
          <label htmlFor="password" className="placeholder-2">
            Password:
          </label>
          <input
            id="password"
            className="input-2"
            type="password"
            name="user_password"
            value={siginIput.user_password}
            onChange={handleInputChange}
            required
          />
        </div >
        <div className="input-container-2">
        <p> Not yet registered? <Link to="/signup">Sign up</Link></p>
          <button
            type="text"
            className="submit-2"
            onClick={() => {
              validataion();
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
