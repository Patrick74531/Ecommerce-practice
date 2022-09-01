import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
    const existCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )
    if (existCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 } :
                cartItem

        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decrementItem = (cartItems, productToDecrement) => {
    const existCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToDecrement.id
    )
    if (existCartItem.quantity === 1) {
        return cartItems.filter((cartItem) =>
            cartItem.id !== productToDecrement.id
        )
    }
    return cartItems.map((cartItem) =>
        cartItem.id === productToDecrement.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 } :
            cartItem
    )
};

const deleteItem = (cartItems, productToRemove) => {
    return cartItems.filter((cartItem) =>
        cartItem.id !== productToRemove.id
    )
};

export const handleCartOpen = (bool) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

export const addItemToCart = (cartItems, product) => {
    const cartNewItems = addCartItem(cartItems, product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartNewItems);
};
export const decrementItemFromCart = (cartItems, product) => {
    const cartNewItems = decrementItem(cartItems, product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartNewItems);
}

export const deleteItemfromCart = (cartItems, product) => {
    const cartNewItems = deleteItem(cartItems, product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartNewItems);
};