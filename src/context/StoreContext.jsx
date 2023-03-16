import React, { useState } from 'react'
import { ITEMS } from '../item';
import { createContext } from 'react';


export const StoreContext = createContext(null);



const getDefCart = () => {
    let cart = {};
    for (let i = 1; i < ITEMS.length +1; i++) {
        cart[i] = 0;
    }
    return cart;
};


export const StoreContextProvider = (props) => {
    const [basketItems, setBasketItems, ] = useState(getDefCart());
    
   
    const totalBasketPrice = () => {
      let totalPrice = 0;
      for (const item in basketItems) {
        if (basketItems[item] > 0) {
          let itemInfo = ITEMS.find((product) => product.id === (item));
          totalPrice += basketItems[item] * itemInfo.price;
        }
      }
      return totalPrice;
    };


    const addToBasket1 = (itemId) => {
      setBasketItems((prev) => ({...prev,[itemId]: prev[itemId]}));
  };
    const addToBasket = (itemId) => {
        setBasketItems((prev) => ({...prev,[itemId]: prev[itemId] + 1}));
    };
    const removeItem = (itemId) => {
        setBasketItems((prev) => ({...prev,[itemId]: prev[itemId] - 1}));
    };

    const cValue = {addToBasket1,basketItems ,addToBasket, removeItem, totalBasketPrice, };
  return (
    <StoreContext.Provider value={cValue}>{props.children}</StoreContext.Provider>
  );
};

