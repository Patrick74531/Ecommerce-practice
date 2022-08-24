import React, { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { SignOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

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
                </div>
            </div>

            <Outlet />
        </Fragment>

    )
}

export default Navigation