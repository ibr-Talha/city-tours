import React from 'react'
import "./Navbar.scss";
import logo from '../logo/logo.png'

export default function navbar() {
  return (
  <nav className='navbar'>
    <img src={logo} alt="logo" />
    <ul className='nav-links'>
      <li>
        <a href="#" className='nav-link'>Home</a>
      </li>
      <li>
        <a href="#" className='nav-link'>About</a>
      </li>
      <li>
        <a href="#" className='nav-link active'>Tours</a>
      </li>
    </ul>
  </nav>)
}
