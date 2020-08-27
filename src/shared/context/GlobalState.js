import React, { useReducer } from "react";

import { CartContext } from "./cart-context";
import { cartReducer, ADD_ITEM, REMOVE_ITEM } from "./reducers";

const GlobalState = (props) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  const addItemToCart = (item) => {
    dispatch({ type: ADD_ITEM, item: item });
  };

  const removeItemFromCart = (itemId) => {
    dispatch({ type: REMOVE_ITEM, itemId: itemId });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        total: state.total,
        addItemToCart: addItemToCart,
        removeItemFromCart: removeItemFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default GlobalState;
