
import React from 'react'

function Allproducts() {

  return (
    <div className="product-wrapper home-wrapper-2 py-4"> 
    
<div className='container-xxl'>
    <div className='row'>
        <div className='col-3'>
        <div className='filter-card mb-4'>
          <h4 className='f-title'>Shop by Categories</h4>
          <div>
            <ul>
              <li>Keyboards</li>
              <li>Keycaps</li>
              <li>MouseMats</li>
              <li>Switches</li>
              <li>PCB</li>
              <li>Accesories</li>


            </ul>
          </div>
        </div>
        <div className='filter-card mb-4'>
        <h4 className='f-title'>Filter</h4>
        <div>
          <h5 className='filter-title2'>Availabity</h5>
          <div className='form-check'>
            <input
            className='form-check-input'
            type="checkbox"
            value="In stock"
            id=""
            />
            <label className='form-check-label' for ="">
              Show all
            </label>
            
          </div>
          
        </div>
        <div className='form-check'>
            <input
            className='form-check-input'
            type="checkbox"
            value="In stock"
            id=""
            />
            <label className='form-check-label' for ="">
              In Stock
            </label>
            
          </div>
          
        </div>
        <div className='filter-card mb-4'>
          <h4 className='f-title'>Switches</h4>
          <div>
            <ul>
              <li>Clicky</li>
              <li>Linear</li>
              <li>Tactile</li>
            


            </ul>
          </div>
        </div>

    </div>


    <div className='col-8'>
      <div className='sort-grid'>
        <div className='d-flex align-items-center '>
          <p>Sort By:</p>
          <select name='' className='form-control form form-select' id="">
            <option value="">Featured Products</option>
            <option value="">Best Selling</option>
            <option value="">Price, low to high</option>
            <option value="">Price, high to low</option>

          </select>
        </div>
        <div className='d-flex align-align-items-center gap-5'>
          <p className=''></p>
        </div>
        </div>

  <div className="row2">
  <div class="col-sm-6">
    <div class="card">
    <img class="card-img-top" src="images/spellbook-deskpad.png" alt="Card image cap"/>

      <div class="card-body">
        <h5 class="card-title">Name</h5>
        <p class="card-text">Price.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="card">
    <img class="card-img-top" src="images/spellbook-deskpad.png" alt="Card image cap"/>

      <div class="card-body">
        <h5 class="card-title">Name</h5>
        <p class="card-text">Price.</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img class="card-img-top" src="images/spellbook-deskpad.png" alt="Card image cap"/>

      <div class="card-body">
        <h5 class="card-title">Name</h5>
        <p class="card-text">Price.</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img class="card-img-top" src="images/spellbook-deskpad.png" alt="Card image cap"/>

      <div class="card-body">
        <h5 class="card-title">Name</h5>
        <p class="card-text">Price.</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
    </div>
  </div>
  

</div>
        
          </div>
          </div>
      </div>
  </div>




  
        

    


   )
}
  


export default Allproducts