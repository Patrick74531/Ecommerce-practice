import React, { useState } from 'react'
import { signInWithGooglePopup, SignInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in.component.scss'
const defaultFormField = {
    email: '',
    password: '',
};
const SignIn = () => {
    const [formField, setFormField] = useState(defaultFormField);
    const { email, password } = formField;

    const resetFormField = () => {
        setFormField(defaultFormField);
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });

    };

    const handelSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await SignInAuthUserWithEmailAndPassword(email, password);
            resetFormField();
        } catch (error) {
            if (error.code === "auth/wrong-password" || "auth/user-not-found") {
                alert('incorrect password or email')
            }
            console.log('error', error)
        }

    };

    const logGoogleUser = async () => {
        await signInWithGooglePopup();

    }
    return (
        <div className='sign-in-container'>
            <h2> have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handelSubmit}>

                <FormInput
                    label='Email'
                    required type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                />
                <FormInput
                    label='Password'
                    required type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button
                        type='button'
                        buttonType='google'
                        onClick={logGoogleUser}
                    >
                        Google Sign in
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default SignIn