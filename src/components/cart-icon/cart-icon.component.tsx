import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { selectCartOpen } from '../../store/cart/cart.selector';
import { handleCartOpen } from '../../store/cart/cart.action';
import { handleUserOpen } from '../../store/user/user.action';
import { selectCartCount } from '../../store/cart/cart.selector';
import { selectUserOpen } from '../../store/user/user.selector';
import './cart-icon.styles.scss'

const CartIcon = () => {
    const isUserOpen = useSelector(selectUserOpen);
    const isCartOpen = useSelector(selectCartOpen);
    const cartCount = useSelector(selectCartCount);
    const dispatch = useDispatch();
    const setCartOpen = (event: any) => {
        event.stopPropagation();
        dispatch(handleCartOpen(!isCartOpen));
        if (isUserOpen)
            dispatch(handleUserOpen(false));
    }
    const closeCart = () =>
        dispatch(handleCartOpen(false));

    useEffect(() => {
        if (isCartOpen)
            document.addEventListener('click', closeCart);

        return () => {
            document.removeEventListener('click', closeCart);
        }
    }, [closeCart]);

    return (
        <div className='cart-icon-container' onClick={setCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon