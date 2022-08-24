import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up.component.scss'
const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confrimPassword: ''
};
const SignUp = () => {
    const [formField, setFormField] = useState(defaultFormField);
    const { displayName, email, password, confrimPassword } = formField;


    const resetFormField = () => {
        setFormField(defaultFormField);
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });

    };

    const handelSubmit = async (event) => {
        event.preventDefault();
        if (password !== confrimPassword) {
            alert('password does not match');
            return;
        }

        try {

            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });

        } catch (error) {
            console.log('error', error);
        };

        resetFormField();
    };
    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handelSubmit}>
                <FormInput
                    label='Display Name'
                    required type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                />
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
                <FormInput
                    label='Confirm Password'
                    required type='password'
                    name='confrimPassword'
                    value={confrimPassword}
                    onChange={handleChange}
                />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp