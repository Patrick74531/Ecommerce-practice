import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up.styles.scss'
import { signUpStart } from '../../store/user/user.action';
const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confrimPassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    countyRegion: '',
    address: '',
    suburb: '',
    state: '',
    postcode: '',

};
const SignUp = () => {
    const dispatch = useDispatch();
    const [formField, setFormField] = useState(defaultFormField);
    const
        {
            displayName,
            email,
            password,
            confrimPassword,
            firstName,
            lastName,
            phoneNumber,
            countyRegion,
            address,
            suburb,
            state,
            postcode,
        } = formField;


    const resetFormField = () => {
        setFormField(defaultFormField);
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });

    };

    const handelSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password !== confrimPassword) {
            alert('password does not match');
            return;
        }

        try {
            dispatch(signUpStart(
                email,
                password,
                displayName,
                firstName,
                lastName,
                phoneNumber,
                countyRegion,
                address,
                suburb,
                state,
                postcode,
            ));
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

                <FormInput
                    label='First Name'
                    required type='text'
                    name='firstName'
                    value={firstName}
                    onChange={handleChange}
                />
                <FormInput
                    label='Last Name'
                    required type='text'
                    name='lastName'
                    value={lastName}
                    onChange={handleChange}
                />

                <FormInput
                    label='Phone Number'
                    required type='text'
                    name='phoneNumber'
                    value={phoneNumber}
                    onChange={handleChange}
                />
                <FormInput
                    label='Country/Region'
                    required type='text'
                    name='countyRegion'
                    value={countyRegion}
                    onChange={handleChange}
                />
                <FormInput
                    label='Address'
                    required type='text'
                    name='address'
                    value={address}
                    onChange={handleChange}
                />
                <FormInput
                    label='Suburb'
                    required type='text'
                    name='suburb'
                    value={suburb}
                    onChange={handleChange}
                />
                <FormInput
                    label='State/Territory'
                    required type='text'
                    name='state'
                    value={state}
                    onChange={handleChange}
                />
                <FormInput
                    label='Postcode'
                    required type='text'
                    name='postcode'
                    value={postcode}
                    onChange={handleChange}
                />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp