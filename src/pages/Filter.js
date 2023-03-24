import React from 'react'
import { Link } from 'react-router-dom';
import {ITEMS} from "../item"
import { Product } from '../Product'
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useRoutes } from 'react-router-dom';

import { useParams } from "react-router-dom";
     



function Filter() {

    const { addToBasket, basketItems } = useContext(StoreContext)
    const { id,type } = useParams();

     const sitem = ITEMS.filter(product => product.type === type);


  return (
    <div className="product-wrapper home-wrapper-2 py-4"> 
   
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-3'>
            <div className='filter-card mb-4'>
             
              <div class="list-group-card">
              <h4 className='f-title'>  Shop by Categories
</h4>
<a href="./keyboards" class="list-group-item list-group-item-action">Keyboards</a>
  <a href= "./keycaps" id class="list-group-item list-group-item-action">Keycaps</a>
  <a href= "./mousemat" class="list-group-item list-group-item-action">MouseMats</a>
  <a href= "./switches" class="list-group-item list-group-item-action disabled">Switches</a>
  <a href= "./PCB" class="list-group-item list-group-item-action disabled">PCB</a>
  <a href= "./accessories" class="list-group-item list-group-item-action disabled">Accesories</a>
</div>
            </div>
            <div className='filter-card mb-4'>
            <div class="list-group-card">
            <h4 className='f-title'>Filter</h4>
            <div>
              <h5 className='filter-title2'>Availabity</h5>
              <div  class="list-group-item list-group-item-action">
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

             
              
            </div>
   
              
            </div>
            </div>

            <div className='filter-card mb-4'>
            <div class="list-group-card">
              <h4 className='f-title'> Switches
</h4>


  <a href="" class="list-group-item list-group-item-action">Linear</a>
  <a href="" class="list-group-item list-group-item-action">Clicky</a>
  <a href="" class="list-group-item list-group-item-action">Tactile</a>
    
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
            
            <div className='row'> 
            {sitem.map(pr => (


            <div class="col-smallstuff"
             key={pr.type}>
             <div className='small-banner1 position-relative'>
             <img src={pr.productImg} className='img'
             alt='small img'
               />
              <div className='small-title-name'>{pr.name}</div>
              <div className='small-title'>£{pr.price}.00</div>
              
             
              
              <Link to={`/Specificproduct/`+ pr.id}>
              <button className='addToCartBtn'>
                View Item

              </button>
             </Link>
            
    </div>
    </div>
  ))}
      
        </div>
     
      </div>
            </div>
            </div>
            </div>
            </div>

       
        
    
  )
}

export default Filter;