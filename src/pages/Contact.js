import React from 'react'

const Contact = () => {
  return (
    <div className='container-xxl'style={{ backgroundImage:`url(/coolbackground.png)` }}> 
    <h1 className='customerService'> CUSTOMER SERVICE</h1>
    <p className='pcustomerService'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis ac ligula et tempus. Sed ut lacus nec ligula commodo bibendum non at magna. Sed laoreet tempus nulla semper vestibulum. Etiam porta vel lectus non laoreet. Etiam convallis tempor purus, nec tincidunt turpis posuere non. </p>
    <p>
  <button class="btn-submit-checkout btn9991" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Leave us a message
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body cardcontact2">
  <form>
  <div class="mb-3">
    <label for="name" class="form-label ">Name</label>
    <input type="name" class="form-control formcontact" id="name"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label ">Email address</label>
    <input type="email" class="form-control formcontact" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="Message" class="form-label">Message</label>
    <input type="Message" class="form-control formcontact-msg" id="Message"/>
  </div>
 
  <button type="submit" class="btn-submit-checkout btn99911">Submit</button>
</form>
  </div>
</div>

    </div>
  )
}

export default Contact