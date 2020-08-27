export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

const addItemToCart = (item, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (foundItem) => foundItem.id === item.id
  );
  // add price logic

  const updatedTotal = state.total;

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...item, qty: 1 });
  } else {
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.qty++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart, total: updatedTotal };
};

const removeItemFromCart = (itemId, state) => {
  console.log("Trying to remove item w id: " + itemId);

  const updatedTotal = state.total;
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (foundItem) => foundItem.id === itemId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };

  updatedItem.qty--;

  if (updatedItem.qty <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart, total: updatedTotal };
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return addItemToCart(action.item, state);
    case REMOVE_ITEM:
      return removeItemFromCart(action.item, state);
    default:
      return state;
  }
};
