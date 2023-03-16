import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  <>
<div className='all'> 
  <section className='home-wrapper-1 '>
    
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/disckb.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/disckb.jpg" class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/disckb.jpg" class="d-block w-100 " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="container-fluid text-center h1 texticons9 ">
Best Sellers</div>
    <div className='container-xxl'>

      <div className='row'>
        <div className='col-6'>
          <div className='main-banner position-relative p-3'>
          <img src="images/discordkeyboard1.jpg" className='img-fluid rounded-2'
          alt='main img'
          />
          <div className='main-banner-content position-absolute'>
            <h6>Instock Now</h6>
            <h3>Discord TKL</h3>
            <p>From £199.99 </p>
            <Link className='button'>BUY NOW</Link>
            </div>
          </div>
        </div>
    
        <div className='col-6'>
          <div className='d-flex flex-wrap justify-content-between align-items-center'>
          <div className='small-banner position-relative p-3'>
          <img src="images/penguinswitch.png" className='img-fluid rounded-2'
          alt='small img'
          />
          <div className='small-banner-content position-absolute'>
            <h6>Penguin Switches</h6>
            <p>From £8.99 </p>
          </div>
          </div>
          <div className='small-banner position-relative p-3'>
          <img src="images/penguinswitch.png" className='img-fluid rounded-2'
          alt='small img'
          />
          <div className='small-banner-content position-absolute'>
            <h6>Penguin Switches</h6>
            <p>From £8.99 </p>
          </div>
          </div>
          <div className='small-banner position-relative p-3'>
          <img src="images/penguinswitch.png" className='img-fluid rounded-2'
          alt='small img'
          />
          <div className='small-banner-content position-absolute'>
            <h6>Penguin Switches</h6>
            <p>From £8.99 </p>
          </div>
          </div>
          <div className='small-banner position-relative p-3'>
          <img src="images/penguinswitch.png" className='img-fluid rounded-2'
          alt='small img'
          />
          <div className='small-banner-content position-absolute'>
            <h6>Penguin Switches</h6>
            <p>From £8.99 </p>
          </div>
          </div>
          
        </div>
        </div>
        </div>
    </div>
  <div class="container-fluid text-center h1 texticons9 ">
New Arrivals</div>

  <div class="container">
  <div class="row row-cols-4 w-5 p-3 sm ">
    <div class="col-smallstuff2">
    <div className='d-flex flex-wrap justify-content-between align-items-center'>
          <div className='small-banner1 position-relative'>
          <img src="images/starwars.png" className='img'
          alt='small img'
          />
                    <div className='small-title'>KEYBOARDS</div>

          </div>
          </div>
      </div>

    <div class="col-smallstuff2">
          <div className='small-banner1 position-relative'>
          <img src="images/NK87.png" className='img'
          alt='small img'
          />
                    <div className='small-title'>KEYBOARDS</div>

          </div>
          </div>


<div class="col-smallstuff2">
          <div className='small-banner1 position-relative'>
          <img src="images/starwars.png" className='img'
          alt='small img'
          />
                    <div className='small-title'>KEYBOARDS</div>

          </div>
          </div>
          <div class="col-smallstuff2">
          <div className='small-banner1 position-relative'>
          <img src="images/4switches.png" className='img'
          alt='small img'
          />
                    <div className='small-title'>KEYBOARDS</div>

          </div>
          
          </div>
          <div class="col-smallstuff2">
          <div className='small-banner1 position-relative'>
          <img src="images/mousepad2.png" className='img'
          alt='small img'
          />
                    <div className='small-title'>KEYBOARDS</div>

          </div>
          
          </div>
          <div class="col-smallstuff2">
          <div className='small-banner1 position-relative'>
          <img src="images/pcb1.png" className='img'
          alt='small img'
          />
          <div className='small-title'>KEYBOARDS</div>
          </div>
          
          </div>
          <div class="col-smallstuff2">
          <div className='small-banner1 position-relative'>
          <img src="images/penguinswitch.png" className='img'
          alt='small img'
          />
                    <div className='small-title'>KEYBOARDS</div>

          </div>
          
          </div>
          <div class="col-smallstuff2">
          <div className='small-banner1 position-relative'>
          <img src="images/penguinswitch.png" className='img'
          alt='small img'
          />
                    <div className='small-title'>KEYBOARDS</div>

          </div>
          
          </div>
  
  </div>
  
</div>
<div class="container-fluid text-center h1 texticons9 ">
Our Promises</div>
<div className='container-xxl ccc'> 
    <div className = "row row-cols-4 w-5 p-3 sm "> 

    <div class="col-smallstuff3">   
     <div className='small-banner1 position2-relative'>
          <img src="images/enviro.png" className='img2'
          alt='small img'
          />
       </div>
       <h5 className='dds'> Sustainable Shipping </h5>
       <p className='ppptextpp'>Our shipping services cover domestic locations within the UK and Channel Islands. We prioritize sustainability and offset the carbon emissions of all our shipped packages.</p>

       </div>

    <div class="col-smallstuff3">   
     <div className='small-banner1 position2-relative'>
          <img src="images/rating.png" className='img2'
          alt='small img'
          />
          
       </div>
       <h5 className='dds'> Customer Satisfaction </h5>
       <p className='ppptextpp'>Gain valuable insights from our esteemed customers through their testimonials and service reviews, which elucidate why we have consistently ranked among the premier custom keyboard retailers in the UK</p>
       </div>
       <div class="col-smallstuff3">   
     <div className='small-banner1 position2-relative'>
          <img src="images/shield.png" className='img2'
          alt='small img'
          />
       </div>
       <h5 className='dds'> Waranty </h5>
       <p>Each of our bespoke keyboards undergoes meticulous testing and rigorous quality assurance prior to dispatch. In the rare event of an issue, we provide complimentary and straightforward repair, replacement, and resolution services.</p>
       </div>
       <div class="col-smallstuff3">   
     <div className='small-banner1 position2-relative'>
          <img src="images/online-chat.png" className='img2'
          alt='small img'
          />
          
       </div>
       <h5 className='dds'> Support </h5>
       <p className='ppptextpp'>Our team is available seven days a week to offer exceptional pre-sales support, comprehensive aftercare, and prompt responses to any inquiries or concerns you may have. Don't hesitate to reach out to us via message, and we will be delighted to assist you.</p>
       </div>
       </div>
       
    </div>

<div class="container-fluid text-center h1 texticons9 ">
On Sale</div>
  <div class="container dda">
    
<div class="row row-cols-4 w-5 p-3 sm ">

<div class="col-smallstuff2">
<div className='d-flex flex-wrap justify-content-between align-items-center'>
      <div className='small-banner1 position-relative'>
      <img src="images/starwars.png" className='img'
      alt='small img'
      />
                <div className='small-title'>KEYBOARDS</div>

      </div>
      
      </div>
      
  </div>
  <div class="col-smallstuff2">
        <div className='small-banner1 position-relative'>
        <img src="images/penguinswitch.png" className='img'
        alt='small img'
        />
                  <div className='small-title'>KEYBOARDS</div>

        </div>
        
        </div>
        <div class="col-smallstuff2">
        <div className='small-banner1 position-relative'>
        <img src="images/penguinswitch.png" className='img'
        alt='small img'
        />
                  <div className='small-title'>KEYBOARDS</div>

        </div>
        
        </div>
        <div class="col-smallstuff2">
        <div className='small-banner1 position-relative'>
        <img src="images/penguinswitch.png" className='img'
        alt='small img'
        />
                  <div className='small-title'>KEYBOARDS</div>

        </div>
        
        </div>
        <div class="col-smallstuff2">
        <div className='small-banner1 position-relative'>
        <img src="images/penguinswitch.png" className='img'
        alt='small img'
        />
                  <div className='small-title'>KEYBOARDS</div>

        </div>
        
        </div>
        <div class="col-smallstuff2">
        <div className='small-banner1 position-relative'>
        <img src="images/penguinswitch.png" className='img'
        alt='small img'
        />
                  <div className='small-title'>KEYBOARDS</div>

        </div>
        
        </div>
        <div class="col-smallstuff2">
        <div className='small-banner1 position-relative'>
        <img src="images/penguinswitch.png" className='img'
        alt='small img'
        />
                  <div className='small-title'>KEYBOARDS</div>

        </div>
        
        </div>
        
        <div class="col-smallstuff2">
        <div className='small-banner1 position-relative'>
        <img src="images/penguinswitch.png" className='img'
        alt='small img'
        />
                  <div className='small-title'>KEYBOARDS</div>

        </div>
        
        </div>
  </div>
  
  </div>
  
    
  </section>
  </div>
  </>
  );
};

export default Home