import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex items-baseline justify-between p-6 text-white bg-black rounded-sm'>
                <h1 className='text-2xl'>Head Logo</h1>
        <nav className='space-x-5 '>

            <NavLink   to={'/'}>Home</NavLink>
            <NavLink  to={'/about-page'}>About</NavLink>
            <NavLink   to={'/contact'} >Contact</NavLink>
   
           
        </nav>
    </div>
  )
}

export default Header