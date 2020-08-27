import React, { useReducer } from "react";

import { CartContext } from "./cart-context";

import { cartReducer, ADD_ITEM, REMOVE_ITEM } from "./reducers";

const GlobalState = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] });

  const addItemToCart = (item) => {
    cartDispatch({ type: ADD_ITEM, item: item });
  };

  const removeItemFromCart = (itemId) => {
    cartDispatch({ type: REMOVE_ITEM, itemId: itemId });
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        total: cartState.total,
        addItemToCart: addItemToCart,
        removeItemFromCart: removeItemFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default GlobalState;
