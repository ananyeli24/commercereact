import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="sticky">
        <div id="logo">
          <img src="assets/images/logo.jpeg" alt="logo" width="50" height="50" />
        </div>

        <ul className="navegacion">
          <li className="navbutton"><Link to="/">Home</Link></li>
          <li className="navbutton"><Link to="/products">Gloves</Link></li>
          <li className="navbutton"><Link to="/contact">Contact</Link></li>
          <li> <a className="navbutton"><i className="fa-solid fa-cart-shopping"></i></a> </li>
        </ul>
        <div className="container">
          <div>
            <input type="search" placeholder="Search" className="search-field" />
            <button type="submit" className="search-button">
              <img src="assets/images/Lupa2.png" alt="Search" />
            </button>
          </div>
        </div>

      </nav>
    </React.Fragment>
  )
}
