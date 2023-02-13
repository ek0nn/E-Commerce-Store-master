import React from 'react'
import Sidebar from '../components/Sidebar'

const Allproducts = () => {
  return (

<>
<Sidebar title="All products"/>
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
          <h6 className='1 line'>Sort By:</h6>
          <select name='' className='form-control form form-select' id="">
            <option value="">Featured Products</option>
            <option value="">Best Selling</option>
            <option value="">Price, low to high</option>
            <option value="">Price, high to low</option>



          </select>
        </div>
      </div>
    </div>
    
</div>

</div>

</div>

</>    )
}

export default Allproducts