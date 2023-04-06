import React from 'react'
import { StoreContext } from '../context/StoreContext';
import { useContext } from 'react';
import { useState } from 'react';
import Stripe2 from '../stripe';

function PayStripe() {

    

  const { basketItems, totalBasketPrice, findCardItems } = useContext(StoreContext)
  const totalPrice = totalBasketPrice();
  const allCardItems = findCardItems()
  return (
    <div className='container-xxl'>

<h2 className=''>Order Summary</h2>
              <Stripe2 /> <h3> ${totalPrice} </h3>
    </div>
  )
}

export default PayStripe