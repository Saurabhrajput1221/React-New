import React from "react";


export default function NewsItems(props) {
  let {title , description , imageUrl , newsUrl, author, date , source } = props;
  return (
    <>
    <div className="my-3">
      <div className="card">
        <div style={{display : 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        right:'0'
        }}><span>{source}</span></div>

    </div>
        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {description}
          </p>
         <p>card text</p>
         <a rel="noreferrer" href={newsUrl} target="-blank" className="btn btn-success">
           Read More
         </a>
        </div>
      </div>
    </>
  );
}
