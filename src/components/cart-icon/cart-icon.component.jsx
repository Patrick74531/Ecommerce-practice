import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
// import { CartContext } from '../../contexts/cart.context'
import { selectCartOpen } from '../../store/cart/cart.selector';
import { handleCartOpen } from '../../store/cart/cart.action';
import { selectCartCount } from '../../store/cart/cart.selector';
import './cart-icon.styles.scss'

const CartIcon = () => {
    const isCartOpen = useSelector(selectCartOpen);
    const cartCount = useSelector(selectCartCount);
    const dispatch = useDispatch(handleCartOpen);
    // const { cartCount, handleCartOpen, isCartOpen } = useContext(CartContext);
    const setCartOpen = () => {
        dispatch(handleCartOpen(!isCartOpen))
    }
    return (
        <div className='cart-icon-container' onClick={setCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon