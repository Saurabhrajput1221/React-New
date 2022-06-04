// We learn UseState and Handling Event(Onclick), change name from Siddu to Bhagat Singh

import React, { useState } from "react";

export default function (Props) {
  {   /* /******************************* */  }

  //   const [count, setcount] = useState("Button 1");
  //   const [newcount, NewSetcount] = useState("Button 2");
  //   const [name, SetName] = useState("Siddu");

  {    /* /******************************* */  }

    const [ Text , SetText] = useState("hello");
    handleOnchange = (event)=>{
            SetText(event.target.value)
    }

  return (
    <>
      {/* /**********************************************************
               Basic of React Hooks                 */}

      {/* <h5>My name is {name}</h5>

      <button onClick={() => SetName("Bhagat Singh")}>Change name</button>
      <div className="mb-3">
        {Props.Heading}
        <label htmlFor="myBox" className="form-label">
          Example Textarea
        </label>
        <textarea className="form-control" id="myBox" rows={6}></textarea>
        <button
          className="btn btn-primary"
          onClick={() => setcount("UpperCase was clicked")}
        >
          Convert To UpperCase
        </button>
        <button
          className="btn btn-success"
          onClick={() => NewSetcount("LowerCase was clicked")}
        >
          Convert To LoverCase
        </button>
        <h1>
          Click any one Button {count} , {newcount}{" "}
        </h1>
      </div> */}

      {/* /*************************************************** */}
      <div className="container">
      <textarea className="form-control"  onChange={ handleOnchange } id="myBox" rows={6}></textarea>
        <h1>Summary</h1>
        <h3> 34343 Words and 4545435345 Characters </h3>
        <h2> Preiview </h2>
      </div>
    </>
  );
}
