import React from 'react'
import { StoreContext } from '../context/StoreContext';
import { ITEMS } from '../item';
import { useContext } from 'react';
import { BasketItem, getTotalV} from '../BasketItem';
import { NavLink, Link } from "react-router-dom";
import { useState } from 'react';
function Basket() {

  const { basketItems, totalBasketPrice} = useContext(StoreContext);
  const totalPrice = totalBasketPrice();
  const [tp, setTp] = useState(totalBasketPrice);


  return (
    <div className='container-xxl'>
      <div>
        <h1> Your Basket</h1>
      </div>
      <div className='basketItems'>
        {ITEMS.map((product) => {

          if (basketItems[product.id] !==0) {
            return <BasketItem data={product} />
          }

        })
        }
      </div>

      
      <div className='subT'>
        
        <p className='subtotal'>Subtotal : £{totalPrice} </p>

      </div>
      <Link to="/Checkout">
      <button className="btn-submit-checkout mrginb"  type="submit">Continue to checkout </button>
      </Link>
      
</div>

  )
}

export default Basket;