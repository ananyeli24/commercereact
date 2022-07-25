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
          <h1 className='hero__title'>
            Elite Gloves
          </h1>

          <p className='hero__subtitle'>
            Level Up Your Game With Our Gloves!
          </p>

          <div className='header-button-wrapper'>
            <Link to="/products" className='button' >Shop Now </Link>
                         
          </div>
        </div>
      </section>
      <Slider />
      <p> High Quality Baseball and Softball Gloves Store 's Sporting Goods
        *Price Promotions - Due to manufacturer restrictions, select new release and
        other specified products are excluded from price promotions.
        Additionally, there are restrictions on the use of coupon codes.
        If you are using a screen reader and are having problems using this website,
        please call 777-77-7777 for assistance.</p>

      <hr />

      <br />


      <Footer />

    </React.Fragment>
  )
}
