import React from "react";
import { Link } from "react-router-dom";

export default function NewsItems(props) {
  return (
    <>
      <div className="card">
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.tilte}</h5>
          <p className="card-text">
           {/* {props.description} */}
          </p>
          <Link to="/" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </>
  );
}
