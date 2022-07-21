import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'
export default function Home() {
  return (
    <React.Fragment>
      <NavBar />  
    <h2>Sports-Glove-Level</h2>

  <aside>
    <a class="asidebutton" href="https://www.youtube.com/watch?v=YK3tJmSyaWw&t=34s">Mechanics Best Watch</a>
    
  </aside>
  


    <img src="assets/images/glove100.png" alt="background" class="glove"/>


    <h3> High Quality Baseball and Softball Gloves Store 's Sporting Goods
      *Price Promotions - Due to manufacturer restrictions, select new release and 
      other specified products are excluded from price promotions.
       Additionally, there are restrictions on the use of coupon codes.
      If you are using a screen reader and are having problems using this website, 
      please call 777-77-7777 for assistance.</h3>

      <hr/>
    <aside>
      <a aria-label="facebook" href="#" class="fa fa-facebook"></a>
      <a aria-label="twitter" href="#" class="fa fa-twitter"></a>
      <a aria-label="instagram" href="#" class="fa fa-instagram"></a>
      <a aria-label="pinterest" href="#" class="fa fa-pinterest"></a>
    </aside>
    
    
    <br/>
    <Footer />
    
    </React.Fragment>
  )
}
