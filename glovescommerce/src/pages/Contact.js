import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'


export const Contact = () => {
  // window.addEventListener('load', () => {
  // 	const form = document.querySelector("#new-submission");
  // 	const input = document.querySelector("#new-submission");


  // 	form.addEventListener('submit', (e) => {
  // 		e.preventDefault();



  // 		const completion = input.value;

  //         if(!completion){
  //             alert("Please fill out the form!")
  //             return;
  //         }}

  return (
    <React.Fragment>
      <NavBar />

      <h2>Contact Form</h2>
      <form className="wrapper">

        <h3>Contact us!</h3>

        <div className="whole-form">
          <div className="form-box">
            <label>Name*</label>
            <input type="text" className="label_name" placeholder="Julia Rodriguez" />
          </div>

          <div className="form-box">
            <label >Number*</label>
            <input type="text" className="label_name" placeholder="888-888-8888" />
          </div>


          <div className="form-box">

            <label for="mail">Email*</label>
            <input type="email" className="label_name" id="mail" placeholder="jualia@hello.com" required />

          </div>



          <div className="form-box">
            <label for="Message"> Tells us anything! :) </label>
            <textarea id="Message" className="label_name" name="message" placeholder="write your message here"> </textarea>
          </div>

        </div>

        <input className="submit" type="Submit" name="new-submission"  value="Submit" />
      </form>
      <p>For direct contact with us feel free to reach out through email, phone call or our local store. Our team is available 24/7. 
        You should expect an email back within 5 minutes, our lines and store are open 7 days of the week between 9am-9pm</p>
      <div className="contacting_us">
      <a href="tel:777-777-7777"> <i class="fa-solid fa-phone" id="fa-phone"></i>(777)777-7777</a>
      <a href="mailto:Julia@gmail.com"> <i class="fa-solid fa-envelope" id="fa-envelope"></i> myeliteglove@gmail.com</a>
      <a href="https://www.google.com/maps/place/Red+Ventures/@35.0061496,-80.8460336,17z/data=!3m1!4b1!4m5!3m4!1s0x8856832c57f0fc87:0xbd566135231a2a0b!8m2!3d35.0065941!4d-80.8459102"><i class="fa-solid fa-location-dot" id="fa-location-dot"></i> Red Ventures, Fort Mill </a>
      </div>
      <hr />

      <Footer />

    </React.Fragment>

  )

}
