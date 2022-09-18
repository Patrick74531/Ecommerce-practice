import { useNavigate } from "react-router-dom"
import Button from "../button/button.component"
import Orders from "../orders/orders.component"
import './user-orders.styles.scss'

const UserOrders = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/checkout');
    };
    return (
        <div className="user-orders">
            <Orders />
            <Button onClick={handleNavigate}>
                GO TO CHECKOUT
            </Button>
        </div>
    )
}

export default UserOrders