import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { ImCross } from 'react-icons/im';

const Header = () => {
  const [show, setshow] = useState(false);
  const handleShow=()=>{
    setshow(!show);
  }
  return (
    <div className='flex items-baseline justify-between p-6 text-white bg-black sm:bg-violet-500 '>
      
      <div>
      <h1 className='text-2xl'>Head Logo</h1>
    {show && <nav className='flex-col hidden mt-3 space-y-2 sm:flex '>

       <NavLink   to={'/'}>Home</NavLink>
       <NavLink  to={'/about-page'}>About</NavLink>
       <NavLink   to={'/contact'} >Contact</NavLink>
      </nav> }
      </div> 
                

     <nav className='block space-x-5 sm:hidden'>

            <NavLink   to={'/'}>Home</NavLink>
            <NavLink  to={'/about-page'}>About</NavLink>
            <NavLink   to={'/contact'} >Contact</NavLink>
            </nav> 
       <button onClick={handleShow}>{show ?<ImCross /> :<FaBars className='hidden sm:flex'/>}</button> 
    </div>
  )
}

export default Header