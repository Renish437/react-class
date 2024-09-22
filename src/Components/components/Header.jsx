import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <h1>Head Logo</h1>
        <nav className='flex p-3 m-2 text-white bg-black'>
            <NavLink className={'mx-3'}  to={'/'}>Home</NavLink>
            <NavLink className={'mx-3'}  to={'/contact'} >Contact</NavLink>
            <NavLink className={'mx-3'} to={'/about-page'}>About</NavLink>
           
        </nav>
    </div>
  )
}

export default Header