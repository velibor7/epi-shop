import React, { useContext } from "react";

import { CartContext } from "../../shared/context/cart-context";

const Cart = () => {
  const cartContext = useContext(CartContext);

  console.log(cartContext);

  return (
    <ul>
      {cartContext.cart.map((cartItem) => (
        <li key={cartItem.id}>
          {cartItem.title} {cartItem.qty}
          <button
            onClick={cartContext.removeItemFromCart.bind(this, cartItem.id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Cart;
