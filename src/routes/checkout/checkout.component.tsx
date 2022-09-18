import PaymentForm from '../../components/payment-form/payment-form.compnents';
import Orders from '../../components/orders/orders.component';
import { auth } from '../../utils/firebase/firebase.utils';
import './checkout.styles.scss'
import Auth from '../auth/auth.component';
const Checkout = () => {
    const user = auth.currentUser
    console.log(user);
    return (
        <div >
            <Orders />
            {user ? <PaymentForm /> : <Auth />}

        </div>
    )
}

export default Checkout