import React, { useState } from 'react'

export default function ContactUs() {
  const [count , Icount] = useState(0);
  return (<>
    <div>This is ContactUs Component</div>
    <p>UseState Practice    </p>
    <h1>count {count}</h1>
    <button className='btn btn-success' onClick={()=>Icount(count+ 1) }>Conting</button>
  </>
  )
}
