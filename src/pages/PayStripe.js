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
    
    <div className='bgcol'> 
    <div className=' mainconbuild'>
      <div className='rightguidess23414'>
        <div className='textright'>
        <h1 class="sc-eBiQxn cVshjc">Order total: {totalPrice} </h1>
        </div>
      </div>
      <div className='container-xxl '>
        <div className='container-xxl stripe222'>
          <h1 className='titleStripe'>Checkout</h1>
          <form>
          <div class="mb-3 dsadw ">
    <input type="email" placeholder ="Please enter your email address" class="form-control   dsadw StripeElement" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3 dsadw ">
    <input type="email" placeholder ="Please enter your Fullname" class="form-control   dsadw StripeElement" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  </form>

              <Stripe2 /> 
              
        </div>
      </div>
      </div>
      </div>

  )
}

export default PayStripe