import React from 'react'

const Specificproduct = () => {
  return (
 
    <div className='container-xxl'>
        <h4 className='item-top-text'>back</h4>
    <div class="row">
    <div class="specific-col ">
    <img src="images/discordkeyboard1.jpg" className='img-fluid rounded-2'
          alt='main img'
          />
    </div>
    <div class="col-md-6">
 <h2 className='item-name-specific'>Item Name</h2>    
 <p className='brand-review'>Brand :</p>
 <p className='brand-review'>Reviews :</p>
 <div class="btn-group">
  <button class="btn2 btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Quantity
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">1</a></li>
    <li><a class="dropdown-item" href="#">2</a></li>
    <li><a class="dropdown-item" href="#">3</a></li>
    <li><a class="dropdown-item" href="#">4</a></li>
    <li><a class="dropdown-item" href="#">5</a></li>
    <li><a class="dropdown-item" href="#">6</a></li>
    <li><a class="dropdown-item" href="#">7</a></li>
    <li><a class="dropdown-item" href="#">8</a></li>
    <li><a class="dropdown-item" href="#">9</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn2 btn-secondary btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Add to cart
  </button>
  </div>
  <h5 className='desc'>Desc</h5>
  <p>dasdasdasdasdsadadsadasd asd as das das dasd as </p>
  
 </div>
 <div className='row'> 
<div class="col-main-img">
      <img
        src="images/discordkeyboard1.jpg"
        alt="Gallery image 1"
        class="under-main-img"
      />
    </div>
    <div class="col-main-img">
      <img
        src="images/discordkeyboard1.jpg"
        alt="Gallery image 1"
        class="under-main-img"
      />
    </div>
    <div class="col-main-img">
      <img
        src="images/discordkeyboard1.jpg"
        alt="Gallery image 1"
        class="under-main-img"
      />
    </div>
    
  <h5>Whats included</h5>
  <p>dasdasdasdasdsadadsadasd asd as das das dasd as </p>
    <h5>Item specification</h5>
  <p>dasdasdasdasdsadadsadasd asd as das das dasd as
  dasdasdasdasdsadadsadasd asd as das das dasd as 
  dasdasdasdasdsadadsadasd asd as das das dasd as 
  dasdasdasdasdsadadsadasd asd as das das dasd as  </p>
</div>
</div>


    
</div>



    
  )
}

export default Specificproduct