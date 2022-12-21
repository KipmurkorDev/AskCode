import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./sign.css";
import { loginUser } from "../../Redux/Slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import authHeader from "../../Redux/Helpers/tokenHeaders";

export default function Login() {
  const [errors, setErrors] = useState("");
  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const validataion = async () => {
    if (!Email || !Password) {
      setErrors("All Fields Are Required!");
    } else {
      await dispatch(loginUser({ email: Email, user_password: Password }));
      let data = await authHeader();
      if (data["x-access-token"]?.length > 0) {
        clearForm();
        return navigate("/home");
      } else {
        return navigate("/");
      }
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const clearForm = () => {
    setEmail("");
    setPassword("");
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
            value={Email}
            onChange={handleEmailChange}
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
            value={Password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="input-container-2">
          <p>
            {errors ? <p style={{ color: "red" }}>{errors}</p> : null}
            <p style={{ color: "red" }}>{error}</p>
            Not yet registered? <Link to="/signup">Sign up</Link>
          </p>
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
