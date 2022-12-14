import { useSelector } from 'react-redux/es/exports';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.componnet'
import './orders.styles.scss'
const Orders = () => {
    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectCartTotal);

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
        </div>
    )
}

export default Orders