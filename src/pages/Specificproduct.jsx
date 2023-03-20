import React from 'react'
import { StoreContext } from '../context/StoreContext';
import { ITEMS } from '../item';
import { useContext } from 'react';
import { BasketItem } from '../BasketItem';
import { Product } from '../Product';
import Store from './Store';
import { Single } from '../Single';
import { NavLink, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Fragment } from 'react';


const Specificproduct = (props) => {
  const { addToBasket, basketItems } = useContext(StoreContext)
  const { id } = useParams();
  const sitem = ITEMS.filter(product => product.id === id);

  return (
    <Fragment>
      <div className='container-xxl sp99'>
        <div class="card mb-3 spCard" >
          <div class="row g-0">
            {sitem.map(pr => (

              <div key={pr.id} class="col-md-4 colsp">
                <img src={pr.productImg} class="img-fluid rounded-start imgBuild" alt="..." />

              </div>
            ))}

            <div class="col-md-8 colsp2">

              {sitem.map(pr => (

                <div class="card-body" key={pr.id} >
                  <h5 class="card-title spTitle">{pr.name}</h5>
                  <p class="card-text spSku">5DFS7238DN</p>
                  <h5 className='card-text spPrice'> Price</h5>
                  <h5 className='card-text spPrice2'> ${pr.price}</h5>
                  <p class="card-text spSku spText22">Shipping calculated at checkout</p>
                  <h5 className='card-text spQuan '> Quantity</h5>

                  <h5 className='card-text spQuan '> Description</h5>

                  <p class="card-text spSku">{pr.pDesc} </p>
                  <button className='addToCartBtn' onClick={() => addToBasket(pr.id)}>
                    Add to cart
                  </button>
                </div>

              ))}
            </div>
          </div>


        </div>
        <div className='subT'>

        </div>
        <Link to="/Store">
          <button className="btn-submit-checkout" type="submit">Continue Shopping </button>
        </Link>

      </div>

    </Fragment>


  )
}

export default Specificproduct