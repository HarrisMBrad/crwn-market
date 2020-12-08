import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const SelectCartItems = createSelector(
      [selectCart],
      (cart) =>
            cart.cartItems
);

export const selectCartItemsCount = createSelector(
      //oo
      [selectCartItems],
      cartItems =>
            cartItems.reduce(
                  (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
      
                  0
            )
);