import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'


export const  Contact = () => { 
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
  <h2>Contact Information</h2>
  
    <form>

      <h3> Contact us!</h3>
      
      <div className="whole-form"> 
      <div className="form-box">
        <label>Name*</label>
        <input type="text" className="label_name"placeholder="Julia Rodriguez" />
      </div>
      
      <div className="form-box">
        <label >Number*</label>
        <input type="text" className="label_name" placeholder="888-888-8888" />
      </div>

      
      <div className="form-box">

        <label for="mail">Email*</label>
        <input type="email" className="label_name" id="mail" placeholder="jualia@hello.com" required/>

      </div>

      

      <div className="form-box">
        <label for="Message"> Tells us anything! :) </label>
        <textarea id="Message" className="label_name" name="message"> </textarea>
      </div>

      </div>
      
       <input className="submit" type="Submit" name="new-submission" id="new-submission" value="Submit"/>
    </form>
  
  
  <br/>
  <hr/>

<Footer />

    </React.Fragment>
    
  )
  
  }
