import React from "react";
import { useContext } from "react";
import { StoreContext } from "./context/StoreContext";

export const BasketItem = (props) => {
    const {id, name, price, productImg} = props.data;
    const { basketItems , addToBasket, removeItem} = useContext(StoreContext)
    
    return <div className="basketItem">
        
        <img className = "checkoutImg"src={productImg} />
        <div className="desc">
            <p className="itemName"> <b> Name: </b>  {name}</p>
            <p className="itemName"> <b> Price: </b> {price} </p>
            <div className="basketHandler">
               <button onClick={() => removeItem(id)}> - </button>
               <input className ="customeValue" value={basketItems[id]}></input>
               <button onClick={() => addToBasket(id)}> + </button>

            </div>
            <div>
                <p>  </p>
            </div>
        </div>
        
    </div>
    
}