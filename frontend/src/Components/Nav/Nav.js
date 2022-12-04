import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Nav.css";
import { faUser } from '@fortawesome/free-solid-svg-icons'
 const elemet=<FontAwesomeIcon icon={faUser} />

export default function Navbar() {
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
        <div className="header-profile">{elemet} Me</div>
      </Link>
      <Link to="/">
        <button className="btn-nav-3">Logout</button>
      </Link>
      
      </div>
    </div>
  );
}
