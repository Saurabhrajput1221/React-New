import React, { useEffect, useState }  from "react";

function UseEffectHook(){
    useState [data , changedata] = useState("Rohit");

    // useEffect(()=>{
    //     console.log("hello")
    // })
    return(<>
        <h1>{data}</h1>
        <button onClick={()=>changedata("patil")}>Change Name</button>
    </>
    )
}
export default UseEffectHook;