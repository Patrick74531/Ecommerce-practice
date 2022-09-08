import React, { useContext, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { selectCartItems } from '../../store/cart/cart.selector';
import { decrementItemFromCart, addItemToCart, deleteItemfromCart } from '../../store/cart/cart.action';
// import { CartContext } from '../../contexts/cart.context'
import './checkout-item.styles.scss'
import { CartItem } from '../../store/cart/cart.types';

type CheckOutItemProps = {
    cartItem: CartItem
}
const CheckoutItem: FC<CheckOutItemProps> = ({ cartItem }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { imageUrl, name, price, quantity } = cartItem;
    // const { decrementItemFromCart, addItemToCart, deleteItemfromCart } = useContext(CartContext);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>
                <div className='arrow' onClick={() => dispatch(decrementItemFromCart(cartItems, cartItem))}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => dispatch(addItemToCart(cartItems, cartItem))}>
                    &#10095;
                </div>
            </span>
            <span className='price'> {price * quantity}</span>
            <div className='remove-button' onClick={() => dispatch(deleteItemfromCart(cartItems, cartItem))}>
                &#10005;
            </div>
        </div>
    )
}

export default CheckoutItem