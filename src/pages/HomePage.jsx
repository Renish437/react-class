import React, { useState } from 'react'
import Header from '../Components/components/Header'



const HomePage = () => {
 
const [count,setCount]=useState(0);

const handleIncre=()=>{
setCount(count+1);
 }
 const handleDecre=()=>{
  setCount((count>0)?count-1:0);
 }
console.log('render');

  return (
   <div>
 
<div className='flex p-2 mx-4 my-3 rounded-md w-fit bg-slate-300'>
<button className='mx-3' onClick={handleIncre}>+</button>
    <h1>{count}</h1>
    <button className='mx-3 ' onClick={handleDecre}>-</button>

</div>
    
   </div>

  )
}

export default HomePage