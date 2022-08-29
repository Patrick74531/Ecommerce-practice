import React, { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import './cart-icon.styles.scss'

const CartIcon = () => {
    const { cartCount, handleCartOpen, isCartOpen } = useContext(CartContext);
    const setCartOpen = () => {
        handleCartOpen(!isCartOpen)
    }
    return (
        <div className='cart-icon-container' onClick={setCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon