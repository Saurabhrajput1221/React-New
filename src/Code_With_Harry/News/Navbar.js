import React from "react";
import { Link } from "react-router-dom";

export default function (Props) {
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
          </ul>
        </div>
      </nav>
    </>
  );
}

