import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    setCartItems: () => { },
    cartCount: 0,
    totalPrice: 0,
});

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

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    };
    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product))
    };
    const decrementItemFromCart = (product) => {
        setCartItems(decrementItem(cartItems, product))
    }

    const deleteItemfromCart = (product) => {
        setCartItems(deleteItem(cartItems, product))
    };

    useEffect(() => {
        const count = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(count);
        const price = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setTotalPrice(price);
        console.log('price', totalPrice)
    }, [cartItems])

    const value = { isCartOpen, handleCartOpen, addItemToCart, cartItems, cartCount, decrementItemFromCart, deleteItemfromCart, totalPrice }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
