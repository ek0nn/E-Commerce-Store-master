import React from 'react'
import { StoreContext } from '../context/StoreContext';
import { ITEMS } from '../item';
import { useContext } from 'react';
import { BasketItem } from '../BasketItem';
const Checkout = () => {

  const { basketItems, totalBasketPrice} = useContext(StoreContext)
  const totalPrice = totalBasketPrice();


  return (
    <div class="container">


<div class="py-5 text-center">
      <h2>Checkout form</h2>
      <div className='row'> 
            <div class="col-sm-6">
            <label for="firstname" class="form-label-2">First Name</label>
              <input type="text" class="form-control-2" id="firstname" placeholder="" required=""/>
              <div class="invalid-feedback">
                Please enter your first name.
              </div>
            </div>

            <div class="col-sm-6">
            <label for="lastName" class="form-label-2">Surname</label>
              <input type="text" class="form-control-2" id="surname" placeholder="" required=""/>
              <div class="invalid-feedback">
                Please enter your surname.
              </div>
            </div>
            <div class="col-sm-6">
            <label for="phonenumber" class="form-label-2">Phone number</label>
              <input type="text" class="form-control-2" id="address" placeholder="Your 11 digit phone number" required=""/>
              <div class="invalid-feedback">
                Please enter your phone number
              </div>
            </div>
            <div class="col-sm-6">
            <label for="Postcode" class="form-label-2">Postcode</label>
              <input type="text" class="form-control-2" id="postcode" placeholder="Your area postcode" required=""/>
              <div class="invalid-feedback">
                Please enter your post code
              </div>
            </div>

            <div class="col-sm-6">
            <label for="address" class="form-label-2">Address line 1 (or company Name)</label>
              <input type="text" class="form-control-2"  placeholder="" required=""/>
              <div class="invalid-feedback">
                Please enter your address
              </div>
            </div>

            <div class="col-sm-6">
            <label for="address" class="form-label-2">Address line 2 (optional)</label>
              <input type="text" class="form-control-2"  placeholder="" required=""/>
              <div class="invalid-feedback">
                Please enter your address
              </div>
            </div>

            <div class="col-sm-6">
            <label for="address" class="form-label-2">Town/City</label>
              <input type="text" class="form-control-2"  placeholder="" required=""/>
              <div class="invalid-feedback">
                Please enter your town/city
              </div>
            </div>
            
            <hr class="my-4"/>
            <h2> Billing information</h2>
            <div class="col-sm-6">
            <label for="address" class="form-label-2">Town/City</label>
              <input type="text" class="form-control-2"  placeholder="" required=""/>
              <div class="invalid-feedback">
                Please enter your town/city
              </div>
            </div>


          <hr class="my-4"/>
          <div className='basketItems2'>
            <h2 className='order-summary'>Order Summary</h2>
        {ITEMS.map((product) => {
          if (basketItems[product.id] !==0) {
            return <BasketItem data={product} />
          }

        })
        }
          <button className="btn-submit-checkout" type="submit">Continue to checkout</button>
            <p className='subtotal'>Subtotal : £{totalPrice} </p>
        </div>
        </div>

        </div>
</div>


      



    
    )


}

export default Checkout