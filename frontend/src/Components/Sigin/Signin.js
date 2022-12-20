import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./sign.css";
import { loginUser } from "../../Redux/Slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import authHeader from "../../Redux/Helpers/tokenHeaders";

export default function Login() {
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.auth.loading);

  console.log(token, loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const validataion = async () => {
    if (siginIput.email === "" || siginIput.user_password === "") {
      alert(" You missed");
    } else {
      await dispatch(loginUser(siginIput));
      let data = await authHeader();
      console.log(data);
      if (data["x-access-token"]?.length > 0) {
        clearForm()        
        return navigate("/home");
      } else {
        return navigate("/");
      }
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
        </div>
        <div className="input-container-2">
          <p>
            {" "}
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
