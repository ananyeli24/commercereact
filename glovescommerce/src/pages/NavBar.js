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
          <li className="navbutton"><Link to="/"> <span className="nav_button_hover">Home</span></Link></li>
          <li className="navbutton"><Link to="/products"><span className="nav_button_hover">Gloves</span></Link></li>
          <li className="navbutton"><Link to="/contact"><span className="nav_button_hover">Contact</span></Link></li>
          <li className="navbutton"><Link to="/cart"><i className="fa-solid fa-cart-shopping nav_button_hover" > </i></Link></li>
          
        </ul>

      </nav>
    </React.Fragment>
  )
}
