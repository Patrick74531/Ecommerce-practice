import React, { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/exports';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { selectCurrentUser } from '../../store/user/user.selector';
// import { SignOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';
// import { CartContext } from '../../contexts/cart.context';
// import { UserContext } from '../../contexts/user.context';
import './navigation.styles.scss';

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectCartOpen);
    const SignOutUser = () => dispatch(signOutStart());
    // const { isCartOpen } = useContext(CartContext);
    // const { currentUser } = useContext(UserContext);


    return (
        <Fragment>
            <div className='nav-bar'>
                <Link to='/'>
                    <CrwnLogo className='nav-bar-logo' />
                </Link>
                <div className='nav-links-containers'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {currentUser ?
                        <span
                            className='nav-link'
                            onClick={SignOutUser}
                        >
                            Sign Out
                        </span> :
                        <Link className='nav-link' to='/auth'>
                            Sign In
                        </Link>
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}

            </div>


            <Outlet />
        </Fragment>

    )
}

export default Navigation