import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
//code example from https://www.emailjs.com/docs/examples/reactjs/
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert('We have recieved your email and will be in contact soon');


    emailjs.sendForm('service_iywd1da', 'template_ks5zvao', form.current, 'wteYwsKj1S_g47D8L')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
  return (
    <div className='container-xxl'style={{ backgroundImage:`url(/coolbackground.png)` }}> 
    <h1 className='customerService'> CUSTOMER SERVICE</h1>
    <p className='pcustomerService'> Our dedicated customer service agents are available to assist you from 8am to 5pm, ensuring a seamless and satisfying experience. We take great pride in our commitment to providing exceptional support and are always eager to address any inquiries or concerns you may have. Please do not hesitate to reach out during our operating hours, and we will be more than happy to help you with the utmost professionalism and care. </p>
    <p>
  <button class="btn-submit-checkout btn9991" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Leave us a message
  </button>
</p>
<form ref={form} onSubmit={sendEmail}>

<div class="collapse" id="collapseExample">
  <div class="card card-body cardcontact2">
  <div class="mb-3">
    <label for="name" class="form-label ">Name</label>
    <input type="name" class="form-control formcontact" name="user_name"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label ">Email address</label>
    <input type="email" class="form-control formcontact" id="exampleInputEmail1" name="user_email"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="Message" class="form-label">Message</label>
    <input type="Message" class="form-control formcontact-msg" name="message"/>
  </div>
 
  <button type="submit" class="btn-submit-checkout btn999112" value="Send">Submit</button>
  </div>
  
</div>
</form>

    </div>
  )
}

export default Contact