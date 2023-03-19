import React from 'react'
import { StoreContext } from '../context/StoreContext';
import { ITEMS } from '../item';
import { useContext } from 'react';
import { BasketItem } from '../BasketItem';
import { useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import {Fragment} from 'react';
import Basket from './Basket';



const Checkout = () => {

  


  const { basketItems, totalBasketPrice} = useContext(StoreContext)
  const totalPrice = totalBasketPrice();

  const[firstname, setFirstname] = useState("");
  const[surname, setSurname] = useState("");
  const[address, setAddress] = useState("");
  const[address2, setAddress2] = useState("");
  const[number, setNumber] = useState("");
  const[postcode, setPostcode] = useState("");
  const[city, setCity] = useState("");
  const [tp, setTp] = useState(totalBasketPrice);

  async function submit(e) {
    e.preventDefault();

    try {

      await axios.post("http://localhost:4000/Checkout", {
          address,
          address2,
          firstname,
          surname,
          number,
          postcode,
          city,
          totalPrice,
          tp,
        })
       
        .then(res => {
          if (res.data == "s") {
            alert("An account using the above email has already been used");
          } else if (res.data == "ss") {
            history("/");
          }
        })

        .catch(e => {
          alert("error");
          console.log(e);
        })
  
      }  catch (e){
        console.log(e)
    
      }
    }
    
      
    
    
  return (
    <form action="POST"> 
    <div class="container">


<div class="py-5 text-center">
      <h2>Checkout form</h2>
      <div className='row'> 
            <div class="col-sm-6">
           
            <label for="firstname" class="form-label-2">First Name</label>
              <input type="text" class="form-control-2" id="firstname" placeholder="" required=""
              onChange={(e) => {
                setFirstname(e.target.value);
              }}/>
              <div class="invalid-feedback">
                Please enter your first name.
              </div>
            </div>

            <div class="col-sm-6">
            <label for="lastName" class="form-label-2">Surname</label>
              <input type="text" class="form-control-2" id="surname" placeholder="" required=""
              onChange={(e) => {
                setSurname(e.target.value);
              }}/>
              <div class="invalid-feedback">
                Please enter your surname.
              </div>
            </div>
            <div class="col-sm-6">
            <label for="phonenumber" class="form-label-2">Phone number</label>
              <input type="text" class="form-control-2" id="address" placeholder="Your 11 digit phone number" required=""
              onChange={(e) => {
                setNumber(e.target.value);
              }}/>
              <div class="invalid-feedback">
                Please enter your phone number
              </div>
            </div>
            <div class="col-sm-6">
            <label for="Postcode" class="form-label-2">Postcode</label>
              <input type="text" class="form-control-2" id="postcode" placeholder="Your area postcode" required=""
              onChange={(e) => {
                setPostcode(e.target.value);
              }}/>
              <div class="invalid-feedback">
                Please enter your post code
              </div>
            </div>

            <div class="col-sm-6">
            <label for="address" class="form-label-2">Address line 1 (or company Name)</label>
              <input type="text" class="form-control-2"  placeholder="" required=""
              onChange={(e) => {
                setAddress(e.target.value);
              }}/>
              <div class="invalid-feedback">
                Please enter your address
              </div>
            </div>

            <div class="col-sm-6">
            <label for="address" class="form-label-2">Address line 2 (optional)</label>
              <input type="text" class="form-control-2"  placeholder="" required=""
              onChange={(e) => {
                setAddress2(e.target.value);
              }}/>
              <div class="invalid-feedback">
                Please enter your address
              </div>
            </div>

            <div class="col-sm-6">
            <label for="address" class="form-label-2">Town/City</label>
              <input type="text" class="form-control-2"  placeholder="" required=""
              onChange={(e) => {
                setCity(e.target.value);
              }}/>
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
            <button type="submit" onClick={submit}
            class="btn44 btn-primary btn-lg btn-block">Submit</button>

          <hr class="my-4"/>
          <div className='basketItems2'>
            <h2 className='order-summary'>Order Summary</h2>
      





            <h2 className='order-summary' >  Order summary
              <div > 
              <p className='subtotal'> </p>
              </div>

                  </h2>
            <p  className='subtotal' onChange={(e) => {
                setTp(e.target.defaultValue);
              }}>Subtotal : £{totalPrice} </p>
            

        </div>

        </div>

        </div>
     
     
  </div>


</form>




    
    )


}

export default Checkout