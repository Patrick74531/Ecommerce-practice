import React, { Fragment } from 'react';
import './navigation.styles.scss';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

const Navigation = () => {
    return (
        <Fragment>
            <div className='nav-bar'>
                <Link to='/'>
                    <CrwnLogo className='nav-bar-logo' />
                </Link>
                <div className='nav-bar-links'>
                    <Link to='/shop'>
                        Shop
                    </Link>
                </div>
            </div>

            <Outlet />
        </Fragment>

    )
}

export default Navigation