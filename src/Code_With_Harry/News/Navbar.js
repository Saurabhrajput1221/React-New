import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(Props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" to="/">
          {Props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Link{" "}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link about" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link contact" to="/contact">
                Contact{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link news" to="/news">
                News
              </Link>
            </li>
            <li className="nav-item"><Link className="nav-link news" to="/business">Business </Link></li> 
            <li className="nav-item"><Link className="nav-link entertainment" to="/Entertainment">Entertainment </Link></li>
            <li className="nav-item"><Link className="nav-link general" to="/general">General </Link></li>
            <li className="nav-item"><Link className="nav-link helth" to="/helth">Health </Link></li>
            <li className="nav-item"><Link className="nav-link science" to="/science">Sceince </Link></li>
            <li className="nav-item"><Link className="nav-link sport" to="/sport">Sports </Link></li>
            <li className="nav-item"><Link className="nav-link technology" to="/technolagy">Technology </Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

