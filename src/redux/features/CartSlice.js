import { createSlice } from "@reduxjs/toolkit";
import { startTransition } from "react";

const initialState = {
    cart: [], // Initialize as an empty array
    total: 0,
};

const CartSlice = createSlice({
    name: 'CartSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // const itemPresentIndex = state.cart.findIndex(
            //     item => item.id === action.payload.id,
            // );
            // if (itemPresentIndex !== -1) {
            //     state.cart[itemPresentIndex].quantity += 1;
            // } else {
            //     state.cart.push({ ...action.payload, quantity: 1 });
            // }
            // state.total = state.cart.reduce(
            //     (accumulator, currentItem) =>
            //         accumulator + currentItem.price * currentItem.quantity,
            //     0,
            // );
            state.cart.push({ ...action.payload, quantity: 1 });
            console.log('state is ', state.cart);
        },
        removeFromCart: (state, action) => {
            const itemPresentIndex = state.cart.findIndex(
                item => item.id === action.payload.id,
            );
            if (itemPresentIndex !== -1) {
                if (state.cart[itemPresentIndex].quantity > 1) {
                    state.cart[itemPresentIndex].quantity -= 1;
                } else {
                    state.cart.splice(itemPresentIndex, 1);
                }
            }
            state.total = state.cart.reduce(
                (accumulator, currentItem) =>
                    accumulator + currentItem.price * currentItem.quantity,
                0,
            );
        },
        clearCart: (state) => {
            state.cart = [];
            state.total = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;

export default CartSlice.reducer;