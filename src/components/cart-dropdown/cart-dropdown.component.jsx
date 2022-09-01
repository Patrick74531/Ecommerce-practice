import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    // const { cartItems } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/checkout');
    };
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((cartItem) =>
                    <CartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                    />
                )}

            </div>
            <Button onClick={handleNavigate}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown