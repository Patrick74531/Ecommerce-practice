import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    setCartItems: () => { },
    cartCount: 0,
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
export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const handleCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }
    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product))
    };

    useEffect(() => {
        const count = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(count)
    }, [cartItems])

    const value = { isCartOpen, handleCartOpen, addItemToCart, cartItems, cartCount }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
