import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'
function Nav() {
  return (
    <nav>
      <ul className='navlinks'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav