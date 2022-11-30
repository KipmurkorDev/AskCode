import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export default function Navbar() {
  return (
    <div className="header">
      <div className="btn-nav">  <Link to="/home">
        <button>Home</button>
      </Link></div>
     
      <div className="btn-nav-2">
        <Link to="/ask">
        <button>ASK</button>
      </Link>
      <Link to="/">
        <button>Logout</button>
      </Link>
      
      </div>
    </div>
  );
}
