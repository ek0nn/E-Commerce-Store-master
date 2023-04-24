import React from "react";
import { useContext } from "react";
import { StoreContext } from "./context/StoreContext";

export const BasketItem = (props) => {
    const {id, name, price, productImg} = props.data;
    const { basketItems , addToBasket, removeItem} = useContext(StoreContext)
    

   
    return <div className="container-xxl basketItem">
        
        <img className = "checkoutImg"src={productImg} />
        <div className="desc">
            <p className="itemName"> <b> Name: &nbsp;
</b>  {name}</p>
            <p className="itemName"> <b> Price: &nbsp;
 </b> £{price} </p>
            <div className="basketHandler ttosdm">
            <p className="itemName"> <b> Quantity: &nbsp;</b> </p>
               <button className ="btn-submit-checkout2" onClick={() => removeItem(id)}> - </button>
               <input className ="customeValue" value={basketItems[id]}></input>
               <button className ="btn-submit-checkout2" onClick={() => addToBasket(id)}> + </button>

            </div>
            
            <div>
                <p>  </p>
            </div>
        </div>
        
    </div>
    
}