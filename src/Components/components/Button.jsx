import React from 'react'

const Button = ({color,label}) => {
  return (
    <div>
<button className={`px-5 py-2 m-4 text-white bg-${color}  rounded-md`}>{label}</button>
        
    </div>
  )
}

export default Button