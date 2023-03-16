import React, { useContext } from 'react'
import { StoreContextProvider } from './context/StoreContext';
import { ITEMS } from './item';
import { StoreContext } from './context/StoreContext';


export const Single = (props) => {

    const {id, name, price, productImg, nameL} = props.data;
    const {addToBasket, basketItems, removeItem,addToBasket1} = useContext(StoreContext)


  return (

    <>    <div class="col-md-4 colsp">
      <img src={productImg} class="img-fluid rounded-start imgBuild" alt="..." />
    </div><div class="col-md-8 colsp2">
        <div class="card-body">
          <h5 class="card-title spTitle">{name}</h5>
          <p class="card-text spSku">5DFS7238DN</p>
          <h5 className='card-text spPrice'> Price</h5>
          <h5 className='card-text spPrice2'> ${price}</h5>
          <p class="card-text spSku spText22">Shipping calculated at checkout</p>
          <h5 className='card-text spQuan '> Quantity</h5>
          
          <div className="basketHandler">
          <button onClick={() => removeItem(id)} href= "/Store"> 
          
          Back 
          
          </button>

          <Link to={`/Specificproduct/`+ id}>
              <button className=''>

              </button>
             </Link>

          </div>
          <p class="card-text spSku">Nulla eu erat malesuada, faucibus ante eu, semper neque. Nulla a diam quam. Donec sit amet ornare lectus. Integer sodales quam lectus, vitae mattis felis eleifend ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas suscipit metus quis erat rhoncus, ac commodo velit pellentesque.</p>




          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      </>

  )
};

