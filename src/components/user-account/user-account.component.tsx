import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import './user-account.styles.scss'



const UserAccount = () => {
    const currentUser = useSelector(selectCurrentUser);


    return (
        <div className='user-account'>
            <div className='customer-overview'>
                <h2>Customer Overview</h2>
                <div className='customer-wrap'>
                    <label className='customer-label'>Display Name:</label>
                    <span>{currentUser?.displayName}</span>
                </div>
                <div className='customer-wrap'>
                    <label className='customer-label'>First Name:</label>
                    <span>{currentUser?.firstName}</span>
                </div>
                <div className='customer-wrap'>
                    <label className='customer-label'>Last Name:</label>
                    <span>{currentUser?.lastName}</span>
                </div>
                <div className='customer-wrap'>
                    <label className='customer-label'>Phone Number:</label>
                    <span>{currentUser?.phoneNumber}</span>
                </div>
                <div className='customer-wrap'>
                    <label className='customer-label'>Email:</label>
                    <span>{currentUser?.email}</span>
                </div>
            </div>

            <div className='customer-address'>
                <h2>Address</h2>
                <div className='customer-wrap'>
                    <label className='customer-label'>County/Region:</label>
                    <span>{currentUser?.countyRegion}</span>
                </div>
                <div className='customer-wrap'>
                    <label className='customer-label'>State:</label>
                    <span>{currentUser?.state}</span>
                </div>
                <div className='customer-wrap'>
                    <label className='customer-label'>Address:</label>
                    <span>{currentUser?.address}</span>
                </div>
                <div className='customer-wrap'>
                    <label className='customer-label'>Suburb:</label>
                    <span>{currentUser?.suburb}</span>
                </div>
                <div className='customer-wrap'>
                    <label className='customer-label'>Postcode:</label>
                    <span>{currentUser?.postcode}</span>
                </div>
            </div>
        </div>
    )
}

export default UserAccount