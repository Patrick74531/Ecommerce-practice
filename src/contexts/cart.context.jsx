import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    setCartItems: () => { },
    cartCount: 0,
    totalPrice: 0,
});

const CART_ACTION_TYPES = {
    OPEN_CART: 'OPEN_CART',
    SET_CART: 'SET_CART',
}
const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    totalPrice: 0,
}

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

const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.OPEN_CART:

            return {
                ...state,
                isCartOpen: payload,
            }

        case CART_ACTION_TYPES.SET_CART:
            return {
                ...state,
                ...payload,
            }

        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}


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

export const CartProvider = ({ children }) => {

    const [{ isCartOpen, cartItems, cartCount, totalPrice }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCarItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0);
        const newCartPrice = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART,
                {
                    cartItems: newCartItems,
                    cartCount: newCartCount,
                    totalPrice: newCartPrice,
                }))

    }
    const handleCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.OPEN_CART, bool))

    };
    const addItemToCart = (product) => {
        const cartNewItems = addCartItem(cartItems, product);
        updateCarItemsReducer(cartNewItems);
    };
    const decrementItemFromCart = (product) => {
        const cartNewItems = decrementItem(cartItems, product);
        updateCarItemsReducer(cartNewItems);
    }

    const deleteItemfromCart = (product) => {
        const cartNewItems = deleteItem(cartItems, product);
        updateCarItemsReducer(cartNewItems);
    };

    const value = { isCartOpen, handleCartOpen, addItemToCart, cartItems, cartCount, decrementItemFromCart, deleteItemfromCart, totalPrice }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
