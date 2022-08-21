import React from 'react'
import SignUp from '../../components/sign-up/sign-up.component'
import SignIn from '../../components/sign-in/sign-in.component'
import './auth.component.scss'
const Auth = () => {


    return (
        <div className='auth-container'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Auth