import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const amount = useSelector(state => state.amount)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/contact">
           Redux Bank
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a active mx-2" aria-current="page" href="/contact">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a mx-2" href="/textform">
                  Textform
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a mx-2" href="/disable">
                  Disable
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-a mx-2" href="/contact">
                  Contact us
                </a>
              </li>
            </ul>
            <div>
                <button className="btn btn-success">Balance : {amount}</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
