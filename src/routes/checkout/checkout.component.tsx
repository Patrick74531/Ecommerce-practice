import React, { useContext } from 'react'
import { useSelector } from 'react-redux/es/exports';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.componnet'
import PaymentForm from '../../components/payment-form/payment-form.compnents';
// import { CartContext } from '../../contexts/cart.context'
import './checkout.styles.scss'
const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectCartTotal);
    // const { cartItems, totalPrice } = useContext(CartContext)
    console.log(cartItems);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}


            <div className='total'>TOTAL:${totalPrice}</div>
            <PaymentForm />
        </div>
    )
}

export default Checkout