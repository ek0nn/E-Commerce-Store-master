import React from 'react'
import { Link } from 'react-router-dom';
import {ITEMS} from ".././item"
import { Product } from '../Product'
import Dropdown from 'react-bootstrap/Dropdown';

import { useParams } from "react-router-dom";
     

function Store() {
  const { id,type, keycaps } = useParams();
  

  return (
    <div className="product-wrapper home-wrapper-2 aa22"> 
   
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-3'>
            <div className='filter-card mb-4'>
             
              <div class="list-group-card">
              <h4 className='f-title'>  Shop by Categories
</h4>
<a href="Filter/keyboards" class="list-group-item list-group-item-action">Keyboards</a>
  <a href= "Filter/keycaps" class="list-group-item list-group-item-action">Keycaps</a>
  <a href="Filter/mousemat" class="list-group-item list-group-item-action">MouseMats</a>
  <a href="Filter/switches" class="list-group-item list-group-item-action ">Switches</a>
  <a href="Filter/PCB" class="list-group-item list-group-item-action ">PCB</a>
  <a href="Filter/accessories" class="list-group-item list-group-item-action ">Accesories</a>
</div>
            </div>
           

            <div className='filter-card mb-4'>
            <div class="list-group-card">
              <h4 className='f-title'> Switches
</h4>


  <a href="Filter/Linear" class="list-group-item list-group-item-action">Linear</a>
  <a href="Filter/Clicky" class="list-group-item list-group-item-action">Clicky</a>
  <a href="Filter/tactile" class="list-group-item list-group-item-action">Tactile</a>
    
        </div>
        </div>
        <div className='filter-card mb-4'>
            <div class="list-group-card">
              <h4 className='f-title'> Pre-built Keyboards
</h4>


  <a href="Filter/mech" class="list-group-item list-group-item-action">Mechanical</a>
  <a href="Filter/memb" class="list-group-item list-group-item-action">Mecha Membrane</a>
    
        </div>
        </div>
        </div>


        <div className='col-8'>
          <div className='sort-grid'>
            <div className='sortbybox'>
              <p className='sortbyname'>Sort By:</p>
              <Dropdown className=' sortbybar'>
      <Dropdown.Toggle class="own">
        Select
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="./Filter/ft">Featured Products</Dropdown.Item>
        <Dropdown.Item href="./Filter/best">Best Selling</Dropdown.Item>
        <Dropdown.Item href="./Filter/fav">Our Favorites</Dropdown.Item>

 
      </Dropdown.Menu>
    </Dropdown>
            <div className='d-flex align-align-items-center gap-5'>
              <p className=''></p>
            </div>
            </div>

            <div className='row'> 

        {ITEMS.map((product) =>
        <Product data={product}/>)}
        </div>
        
            </div>
            </div>
            </div>
            </div>
            </div>

       
        
    
  )
}

export default Store;