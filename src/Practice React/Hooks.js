import React, {useState} from "react";

function MyHooks(){
    const [data , changeHook] = useState("hello");

  function  changeHookHandler(){        
            changeHook  ("Hi...!")        
    }
    return(
        <>
        <h1>{data} </h1>
        <button onClick={()=>changeHook("saurabh")}> update Name</button>
        {"  "}
        <button onClick={changeHookHandler}> update Hello to HI</button>
  
        </> 
    )
}
export default MyHooks;