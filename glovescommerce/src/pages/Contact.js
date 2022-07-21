import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'


export default function Contact() {
  return (
    <React.Fragment>
       <NavBar /> 
  <h2>Contact Information</h2>
  
    <form>

      <h3> Contact us!</h3>
      
      <div className="whole-form"> 
      <div class="form-box">
        <label>Name</label>
        <input type="text" className="label_name"placeholder="Julia Rodriguez"/>
      </div>
      
      <div class="form-box">
        <label >Number</label>
        <input type="text" className="label_name" placeholder="888-888-8888"/>
      </div>

      
      <div class="form-box">

        <label>Email</label>
        <input type="email" className="label_name" placeholder="jualia@hello.com"/>

      </div>

      

      <div class="form-box">
        <label for="Message"> Tells us anything </label>
        <textarea id="Message" className="label_name" name="message"> </textarea>
      </div>

      </div>
      
       <input class="submit" type="submit" name="submit" value="submit"/>
    </form>
  
  <br/>
  <hr/>
  <aside>
    <a aria-label="facebook" href="#" class="fa fa-facebook"></a>
    <a aria-label="twitter" href="#" class="fa fa-twitter"></a>
    <a aria-label="instagram" href="#" class="fa fa-instagram"></a>
    <a aria-label="pinterest" href="#" class="fa fa-pinterest"></a>
  </aside>

<Footer />

    </React.Fragment>
  )
}
