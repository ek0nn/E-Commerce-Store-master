import React, { useContext } from 'react'
import { StoreContextProvider } from './context/StoreContext';
import { ITEMS } from './item';
import { StoreContext } from './context/StoreContext';


export const Product = (props) => {

    const {id, name, price, productImg, nameL} = props.data;
    const {addToBasket, basketItems} = useContext(StoreContext)
    const amount = basketItems[id]


  return (

    <div class="col-smallstuff">
    <div className='small-banner1 position-relative'>
    <img src="images/NK87.png" className='img'
    alt='small img'
    />
              <div className='small-title'>{name}</div>
              <div className='small-title'>{price}</div>
              <button className='addToCartBtn' onClick={() => addToBasket(id)}>
                Add to cart {amount > 0 && <> ({amount})</>}
              
              </button>


    </div>
    </div>
  )
};

