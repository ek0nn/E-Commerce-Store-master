import React from 'react'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Payment from './Payment'
const PUBLIC_KEY = "pk_test_51MtebUGHZhy7XdAc5m6N6HN7JpDNYwvU6fSQt7R8CF6aQeuDBjm5jciYVHyI44ff5dV0eAaULA56Rw90hMzuBSGO00FWkVyJq9"

const stripeTestPromise = loadStripe(PUBLIC_KEY)
function Stripe2() {
  return (
    <Elements stripe ={stripeTestPromise}>
      <Payment>

      </Payment>


    </Elements>
  )
}

export default Stripe2