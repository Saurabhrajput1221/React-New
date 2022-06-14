import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [state, setstate] = useState(10);
    const [count , setCount] = useState(100);

    // It will call each and every time ....Like CompnentDidMout();
    // useEffect(()=>{
    //     alert("CompnentDidMout();")
    // })
    /*************************************************************************************** */
     // It will call every time when you click on Count ....Like CompnentWillUnmout();
    useEffect(()=>{
        alert("CompnentWillUnmout();");
    },[count])

 /*************************************************************************************** */
     // It will call Once in whole process....Like CompnentDidUpdate();
  useEffect(()=>{
      alert("CompnentDidUpdate();");
  },[])

   
  return (
      <>
    <div>UseEffect Component</div>
    <div>State : {state}</div> 
    <div>Count : {count}</div>
    <button className='btn btn-success' onClick={()=>{setstate(state +5)}}>state+ </button>
    <button className='btn btn-success mx-5'  onClick={()=>{setCount(count + 100)}}>Count+  </button>

    
      </>
  )
}
