import React from 'react'
import { useState } from 'react'
import { CardElement, useElements, useStripe} from "@stripe/react-stripe-js"

import axios from 'axios'

const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        width: "500px",
        color: "white",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "white",
        },
      },
      invalid: {
        color: "white",
        iconColor: "white",
      },
    },
  };


function Payment() {

    const [work, setWork] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card: elements.getElements(CardElement)
        })


    if(!error){
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 1000,
                id
            })

            if(response.data.work) {
                console.log("Successful payment")
                setWork(true)
            }
        } catch (error) {
            console.log("Error", error)
            
        }
    } else {
        console.log(error.message)
    }
}
  return (
    <>
    
    {!work ?
    <form onSubmit={handleSubmit}>
      
        <fieldset className='formG'> 
         <div className='FormR'>
            <CardElement options = {CARD_ELEMENT_OPTIONS}/>
         </div>
        </fieldset>
        <button class="btn44 btn-primary btn-lg btn-block"> Pay</button>
    </form>
     :
     <div>
         <h4> Congrats you have placed an order</h4>
     </div>

}

   
    
    </>
  )
}

export default Payment