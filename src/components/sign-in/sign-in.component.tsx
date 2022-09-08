import React, { useState, FormEvent, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { signInWithGooglePopup, SignInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action';
import './sign-in.styles.scss'
import { AuthError, AuthErrorCodes } from 'firebase/auth';
const defaultFormField = {
    email: '',
    password: '',
};
const SignIn = () => {
    const dispatch = useDispatch();
    const [formField, setFormField] = useState(defaultFormField);
    const { email, password } = formField;

    const resetFormField = () => {
        setFormField(defaultFormField);
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });

    };

    const handelSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // const response = await SignInAuthUserWithEmailAndPassword(email, password);
            dispatch(emailSignInStart(email, password));
            resetFormField();
        } catch (error) {
            if ((error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD || AuthErrorCodes.INVALID_EMAIL) {
                alert('incorrect password or email')
            }
            console.log('error', error)
        }

    };

    const logGoogleUser = () => {
        // await signInWithGooglePopup();
        dispatch(googleSignInStart())

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