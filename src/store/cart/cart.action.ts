import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { ProductItem } from "../products/product.types";
import { createAction, withMatcher, ActionWithPayload } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems: CartItem[], productToAdd: ProductItem): CartItem[] => {
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

const decrementItem = (cartItems: CartItem[], productToDecrement: ProductItem): CartItem[] => {
    const existCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToDecrement.id
    )
    if (existCartItem && existCartItem.quantity === 1) {
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

const deleteItem = (cartItems: CartItem[], productToRemove: CartItem): CartItem[] => {
    return cartItems.filter((cartItem) =>
        cartItem.id !== productToRemove.id
    )
};

export type HandleCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>
export type SetCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>

export const handleCartOpen = withMatcher(
    (bool: boolean): HandleCartOpen =>
        createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));

export const setCartItem = withMatcher(
    (cartItem: CartItem[]): SetCartOpen =>
        createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItem));

export const addItemToCart = (
    cartItems: CartItem[], product: ProductItem): SetCartOpen => {
    const cartNewItems = addCartItem(cartItems, product);
    return setCartItem(cartNewItems);
};

export const decrementItemFromCart = (
    cartItems: CartItem[], product: ProductItem): SetCartOpen => {
    const cartNewItems = decrementItem(cartItems, product);
    return setCartItem(cartNewItems);
};


export const deleteItemfromCart = (
    cartItems: CartItem[], product: CartItem): SetCartOpen => {
    const cartNewItems = deleteItem(cartItems, product);
    return setCartItem(cartNewItems);
};
