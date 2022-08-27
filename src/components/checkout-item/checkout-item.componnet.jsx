import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './checkout-item.componnet.scss'
const CheckoutItem = ({ cartItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;
    const { decrementItemFromCart, addItemToCart, deleteItemfromCart } = useContext(CartContext);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>
                <div className='arrow' onClick={() => decrementItemFromCart(cartItem)}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItemToCart(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className='price'> {price * quantity}</span>
            <div className='remove-button' onClick={() => deleteItemfromCart(cartItem)}>
                &#10005;
            </div>
        </div>
    )
}

export default CheckoutItem