import React, { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import './cart-icon.component.scss'

const CartIcon = () => {
    const { cartCount, handleCartOpen } = useContext(CartContext);
    return (
        <div className='cart-icon-container' onClick={handleCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon