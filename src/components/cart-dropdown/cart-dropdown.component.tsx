import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';
import { selectCartItems } from '../../store/cart/cart.selector';
// import { selectCurrentUser } from '../../store/user/user.selector';
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import Dropdown from '../dropdown/dropdown.component';
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    // const user = useSelector(selectCurrentUser);
    // const cartItemsMap = user?.cartItems

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/checkout');
    };
    return (
        <Dropdown>
            <div className='cart-items'>
                {cartItems.map((cartItem) =>
                    <CartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                    />
                )}

            </div>
            <Button onClick={handleNavigate}>GO TO CHECKOUT</Button>
        </Dropdown>
    )
}

export default CartDropdown