import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export const NavBar = () => {
  const [toggleVisibility, setToggleVisibility] = useState(true)

const toggleMenu = () => {
toggleVisibility ?  setToggleVisibility(false) : setToggleVisibility(true)
console.log('inside toggle', toggleVisibility)
}
  return (
    <React.Fragment>
      <nav className="sticky">
        <div id="logo">
          <img src="assets/images/logo.jpeg" alt="logo" width="50" height="50" />
          <button className='navbar-toggle' onClick={toggleMenu}>
              <i className="fa-solid fa-bars"></i>
            </button>
        </div>

        <ul className= {toggleVisibility ? 'navbar-links navbar-display-none' : 'navbar-links'}>
          <li className="navbutton"><Link to="/">Home</Link></li>
          <li className="navbutton"><Link to="/products">Gloves</Link></li>
          <li className="navbutton"><Link to="/contact">Contact</Link></li>
        </ul>

      </nav>
    </React.Fragment>
  )
}
