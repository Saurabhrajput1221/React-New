// We learn UseState and Handling Event(Onclick), change name from Siddu to Bhagat Singh

import React, { useState } from "react";

export default function Textform(Props) {
  {
    /* /******************************* */
  }

  //   const [count, setcount] = useState("Button 1");
  //   const [newcount, NewSetcount] = useState("Button 2");
  //   const [name, SetName] = useState("Siddu");

  {
    /* /******************************* */
  }
 
  const [text, SetText] = useState("");

  const AlertClick=()=>{
    setTimeout(() => {
      alert("Alert activated after 2 Seconds");
      
    }, 2000);
  }


  const handleOnchange = (event) => {
    SetText(event.target.value);
  };

  const ClearText = () => {
    let clearall = "";
    SetText(clearall);
  };

  const ToUpperCase = () => {
    let upper = text.toLocaleUpperCase();
    SetText(upper);
  };
  const Tochange = () => {
    let changes = text.toLocaleLowerCase();
    SetText(changes);
  };

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
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleOnchange}
          rows={6}
        ></textarea>
        <button className="btn btn-danger mx-2 my-2" onClick={ClearText}>
          Clear text
        </button>

        <button className=" btn btn-success mx-2 my-2" onClick={ToUpperCase}>
          Convert To UpperCase
        </button>

        <button className=" btn btn-secondary mx-2 my2" onClick={Tochange}>
          Convert To LoverCase
        </button>
        <button className="btn btn-success my-2 mx2" onClick={AlertClick}>Alert Button</button>

        <h1>Summary</h1>
        <h3>
          {text.split(" ").length -1 } Words and {text.length} Characters{" "}
        </h3>
        <h2> Preiview </h2>
        <p>{text} </p>
      </div>
    </>
  );
}
