import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'
import Slider from '../Components/Slider'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <React.Fragment>
      <NavBar />

      <section className='hero'>
        <div className='hero-content'>
          <h1 className='hero__title'>Elite Gloves</h1>

          <p className='hero__subtitle'>Level Up Your Game With Our Gloves!</p>

          <div className='header-button-wrapper'>
            <Link to="/products" className='button'>Shop Now</Link>
          </div>
        </div>
      </section>




      <Slider />


      <section className="collection">

        <h1 id="top-picks-title">OUR TOP PICKS 🥎</h1>

        <div className="collections">
          <div className="the_three_products">
            <img src="assets/images/Glove8.jpeg" alt="firstpick" />
            <h3>Leather Sea Mizuno</h3>
            <a className="banner_buttons" href="#">Buy Now</a>
          </div>

          <div className="the_three_products">
            <img src="assets/images/Glove10.jpeg" alt="firstpick" className="the_three_products" />
            <h3>Darkish' Bond Mizuno</h3>
            <a className="banner_buttons" href="#">Buy Now</a>
          </div>

          <div className="the_three_products">
            <img src="assets/images/Glove9.jpeg" alt="firstpick" className="the_three_products" />
            <h3>Full Duqueza Mizuno</h3>
            <a className="banner_buttons" href="#">Buy Now</a>
          </div>
        </div>
      </section>

      <section className="banner">
        <Link to="/products" >
          <img src="assets/images/desktopbanner.png" alt="sliding on base" className="sliding_on_base" />
        </Link>
      </section>

      
      <section className="collection">

        <h1 id="top-picks-title">New Releases🔥</h1>

        <div className="collections">
          <div className="the_three_products">
            <img src="assets/images/Glove1.jpeg" alt="firstpick" />
            <h3>Red Fire Miz</h3>
            <a className="banner_buttons" href="#">Buy Now</a>
          </div>

          <div className="the_three_products">
            <img src="assets/images/Glove2.jpeg" alt="firstpick" className="the_three_products" />
            <h3>Smooth Miz</h3>
            <a className="banner_buttons" href="#">Buy Now</a>
          </div>

          <div className="the_three_products">
            <img src="assets/images/Glove7.png" alt="firstpick" className="the_three_products" />
            <h3>Gold Tech</h3>
            <a className="banner_buttons" href="#">Buy Now</a>
          </div>
        </div>
      </section>







      <p>High Quality Baseball and Softball Gloves Store 's Sporting Goods
        *Price Promotions - Due to manufacturer restrictions, select new release and
        other specified products are excluded from price promotions.
        Additionally, there are restrictions on the use of coupon codes.
        If you are using a screen reader and are having problems using this website,
        please call 777-77-7777 for assistance.</p>
      <hr />
      <Footer />

    </React.Fragment>
  )
}
