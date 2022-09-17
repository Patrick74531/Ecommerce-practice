import { useState, FormEvent, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { onAuthStateChangedLisener } from '../../utils/firebase/firebase.utils';
import './sign-in.styles.scss'

const defaultFormField = {
    email: '',
    password: '',
};
const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formField, setFormField] = useState(defaultFormField);
    const { email, password } = formField;

    const onAuthLisener = () => onAuthStateChangedLisener((user) => {
        if (user)
            navigate('/shop')
    })
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
            dispatch(emailSignInStart(email, password));
            resetFormField();
            onAuthLisener();
        } catch (error) {
            if ((error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD || AuthErrorCodes.INVALID_EMAIL) {
                alert('incorrect password or email')
            }
            console.log('error', error)
        }

    };

    const logGoogleUser = () => {
        dispatch(googleSignInStart());
        onAuthLisener();
    };
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