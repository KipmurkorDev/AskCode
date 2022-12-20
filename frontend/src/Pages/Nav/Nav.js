import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile } from "../../Redux/Slices/userSlice"
import "./Nav.css";
const removeToken=()=>{
  localStorage.removeItem('user');

}
export default function Navbar() {
  const dispatch=useDispatch()
  return (
    <div className="header">
      <div className="btn-nav">  <Link to="/home">
        <button>Home</button>
      </Link></div>
      <div className="btn-nav-2">
        <Link to="/ask">
        <button className="btn-nav-3">ASK</button>
      </Link>
      <Link to="/profile">
        <div className="header-profile" onClick={()=>{dispatch(getUserProfile())}}><i class='fas fa-user-tie' style={{fontSize: "24px" }}></i></div>
      </Link>
      <Link to="/">
        <button className="btn-nav-3" onClick={()=>removeToken()}>Logout</button>
      </Link>
      
      </div>
    </div>
  );
}
