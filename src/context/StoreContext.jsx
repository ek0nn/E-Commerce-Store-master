import React, { useState } from 'react'
import { ITEMS } from '../item';
import { createContext } from 'react';


export const StoreContext = createContext(null);


const getDefCart = () => {
  let cart = {};
  for (let i = 1; i < ITEMS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};


export const StoreContextProvider = (props) => {
  const [basketItems, setBasketItems,] = useState(getDefCart());
  console.log("from store context", basketItems);

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

  // adding the card items into a new array 
  const findCardItems = () => {
    const initialCart = []
    for (const item in basketItems) {
      if (basketItems[item] > 0) {
        const addedProduct = ITEMS.find(product => product.id === item)
        if (addedProduct) {
          const quantity = basketItems[item];
          addedProduct.quantity = quantity;
          initialCart.push(addedProduct)
        }
      }
    }
    return initialCart;
  }



  const addToBasket = (itemId) => {
    setBasketItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeItem = (itemId) => {
    setBasketItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const cValue = { basketItems, addToBasket, removeItem, totalBasketPrice, findCardItems };
  return (
    <StoreContext.Provider value={cValue}>{props.children}</StoreContext.Provider>
  );
};

