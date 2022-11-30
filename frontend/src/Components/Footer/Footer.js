import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
const element = <FontAwesomeIcon icon={faLinkedin} />
const element2 = <FontAwesomeIcon icon={faGithub} />

export default function Footer() {
  return (
    <div className="footer">
      <div className="btn-footer-1 ">
        <Link to="/about" className="link">
          About
        </Link>
      </div>
      <div className="btn-footer-2">
        <Link to="/contact" className="link">
        Contacts
        </Link>
        <a  target="_blank" rel="noopener noreferrer"  href="https://github.com/KipmurkorDev" className="link">
        {element2} Github
        </a>
        <a  target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/kipmurkor-emmanuel/" className="link">
        {element} Linkedin
        </a>
      </div>
    </div>
  );
}
