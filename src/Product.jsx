import React, { useContext } from 'react'
import { StoreContextProvider } from './context/StoreContext';
import { ITEMS } from './item';
import { StoreContext } from './context/StoreContext';
import { Link } from 'react-router-dom';

import { useParams } from "react-router-dom";

export const Product = (props) => {

    const {id, name, price, productImg, nameL, rev} = props.data;
    const {addToBasket, basketItems,addToBasket1} = useContext(StoreContext)
    const amount = basketItems[id]

  return (

    <div class="col-smallstuff"
    key={id}>
    <div className='small-banner1 position-relative'>
    <img src={productImg} className='img'
    onMouseOut={e => (e.currentTarget.src = {GoogleIcon})} 
    alt='small img'
    />
              <div className='small-title-name'>{name}</div>
              <div className='small-title1'>£{price}</div>
              <div className='small-title1'>{rev}</div>

              
             
              
              <Link to={`/Specificproduct/`+ id}>
              <button className='addToCartBtn'>
                View Item

              </button>
             </Link>
            
    </div>
    </div>
  )
};

