import React, { useContext } from 'react'
import { StoreContextProvider } from './context/StoreContext';
import { ITEMS } from './item';
import { StoreContext } from './context/StoreContext';
import { Link } from 'react-router-dom';

import { useParams } from "react-router-dom";

export const Product = (props) => {

    const {id, name, price, productImg, nameL} = props.data;
    const {addToBasket, basketItems,addToBasket1} = useContext(StoreContext)
    const amount = basketItems[id]

  return (

    <div class="col-smallstuff">
    <div className='small-banner1 position-relative'>
    <img src={productImg} className='img'
    alt='small img'
    />
              <div className='small-title'>{name}</div>
              <div className='small-title'>{price}</div>
              
             
              <button className='addToCartBtn' onClick={() => addToBasket(id)}>
                Add to cart {amount > 0 && <> ({amount})</>}
              
              </button>
              <Link to={`/Specificproduct/`+ id}>
              <button className='addToCartBtn'>
                View Item

              </button>
             </Link>
            
    </div>
    </div>
  )
};

