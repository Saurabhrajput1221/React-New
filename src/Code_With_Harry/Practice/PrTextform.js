// import React, { useState } from 'react'

// export default function PrTextform(props) {
//     const [text , setText] = useState("hello");

//     const ClickonChange=(event)=>{
//         setText( event.target.value);
//     }
//     const SetUpperCase=()=>{
//         let SUP = text.toLocaleUpperCase();
//         setText(SUP);
//     }
//     const SetLowercase=()=>{
//         let SLP = text.toLocaleLowerCase();
//         setText(SLP);
//     }
//     const Delet=()=>{
//         let D = "";
//         setText(D);
//     }
//   return (
//     <>
//     <div className='container'>

//     <h1>This is my {props.Heading} </h1>
//     <textarea id='my box' className='form-control' rows={8} value={text} onChange={ClickonChange} ></textarea>
//     <button className='btn btn-success' onClick={SetUpperCase}>Convert To UpperCase</button>
//     <button className='btn btn-primary' onClick={SetLowercase}>Set to LowerCase</button>
//     <button className='btn btn-danger' onClick={Delet}>Delet Every thing</button>
//     </div>
//     </>
//   )
// }
