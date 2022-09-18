import { ChangeEvent, FormEvent, useState } from 'react'
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { auth } from '../../utils/firebase/firebase.utils';
import { updateUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import './update-info.styles.scss'
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
const UpdateInfo = () => {
    const user = auth.currentUser
    const [formField, setFormField] = useState(defaultFormField);
    const
        {
            displayName,
            email,
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
        if (user)
            await updateUserDocumentFromAuth(user, formField);
        alert('Update Succeed');
        resetFormField();

    };
    return (
        <div className='update-info-container'>

            <div className='form-wrap'>
                <form onSubmit={handelSubmit}>
                    <h2>Upate Information</h2>
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
                </form>
                <form onSubmit={handelSubmit}>
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
                    <Button type='submit'>Update</Button>
                </form>
            </div>
        </div>
    )
}

export default UpdateInfo