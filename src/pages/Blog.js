import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <div> 
    <div className='container-fluid bg333223 bgcol'>
    <p className='blogtitle'> THE BLOG</p>
    </div>
    <div className='mainconbuild sadda' >
    <div className='rightguide2 sadda'>
    <div class="card cardblogr sadda">
  <img src="images/cyberboard_r2_04.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h1 class="card-text c222 ">What Is a Mechanical Keyboard?</h1>
    <p class="card-text "> A mechanical keyboard is a type of computer keyboard that uses individual mechanical switches for each key, as opposed to a membrane-based keyboard that uses a rubber dome beneath each key.</p>
    <Link to= "/Article"> 

    <button className="btn-submit-checkout" type="submit">Learn more </button>
    </Link>
  </div>
</div>
    </div>
    <div className='leftguide sadda'>
      <div className='keebimgguide2 sadda'>
      <div class="card mb-3 cardblog sadda">
  <div class="row g-0 sadda" >
    <div class="col-md-4">
      <img src="images/dragon.jpg" class="img-fluid rounded-start sadaw" alt="..."/>
    </div>
    <div class="col-md-8 sadda">
      <div class="card-body sadda">
        <h5 class="card-title sadda">Your Guide To Keyboard Switches</h5>
        <p class="card-text sadda">Your guide to keyboard switches. Learn about the benefits and different type of switches</p>
        <Link to= "/Article1"> 
 
        <button className="btn-submit-checkout" type="submit">Learn more </button>
        </Link>

      </div>
    </div>
  </div>
</div>


<div class="card mb-3 cardblog sadda">
  <div class="row g-0 sadda">
    <div class="col-md-4 sadda">
      <img src="images/dragred.jpg " class="img-fluid rounded-start sadaw" alt="..."/>
    </div>
    <div class="col-md-8 sadda" >
      <div class="card-body sadda ">
        <h5 class="card-title">Better Than an Apple Magic Keyboard?!?</h5>
        <p class="card-text">Alternative Keyboard: Surpassing Apple's Magic Keyboard with Impressive Features and Performance</p>
        <Link to= "/Article2"> 

        <button className="btn-submit-checkout" type="submit">Learn more </button>
        </Link>
      </div>
    </div>
  </div>
</div>

<div class="card mb-3 cardblog sadda">
  <div class="row g-0 sadda">
    <div class="col-md-4 sadda">
      <img src="images/huhh.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Unique and Inspiring Builds</h5>
        <p class="card-text">Mechanical keyboards are generally considered better by enthusiasts for their tactile feedback, durability, and customization options.</p>
        <Link to= "/Article3"> 

        <button className="btn-submit-checkout" type="submit">Learn more </button>
     </Link>
      </div>
    </div>
  </div>
</div>




      </div>
    </div>



    </div>
    <div className='container-xxl bg333223 bgwhite'>
    <div class="row row-cols-1 row-cols-md-3 g-4 dsadsa2">
  <div class="col">
    <div class="card">
      <img src="images/artisan.jpg" class="card-img-top dsa2dw" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Soldering vs hot swappable</h5>
        <p class="card-text">A soldered PCB requires you to manually solder each switch to the board using a soldering iron and solder wire. This process creates a permanent connection.</p>
        <Link to= "/Article4"> 

        <button className="btn-submit-checkout" type="submit">Learn more </button>
</Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="images/artisan2.jpg" class="card-img-top dsa2dw" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">The Benefits of A Custom Keyboard</h5>
        <p class="card-text">A custom keyboard allows for personalized design, better ergonomics, improved typing experience, and increased functionality through programmable keys.</p>
        <Link to= "/Article5"> 

<button className="btn-submit-checkout" type="submit">Learn more </button>
</Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="images/artisan3.jpg" class="card-img-top dsa2dw" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Advantages of a Tenkeyless Custom Keyboard</h5>
        <p class="card-text">TA tenkeyless custom keyboard offers greater portability, desk space efficiency, and ergonomic benefits due to a more compact layout.</p>
        <Link to= "/Article6"> 

        <button className="btn-submit-checkout" type="submit">Learn more </button>
</Link>
      </div>
    </div>
  </div>
  
</div>
    </div>
    </div>
  )
}

export default Blog