import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="sticky">
        <div id="logo">
          <img src="assets/images/logo.jpeg" alt="logo" width="50" height="50" />
        </div>

        <ul>
          <li className="navbutton"><Link to="/">Home</Link></li>
          <li className="navbutton"><Link to="/products">Gloves</Link></li>
          <li className="navbutton"><Link to="/contact">Contact</Link></li>
        </ul>

      </nav>
    </React.Fragment>
  )
}
