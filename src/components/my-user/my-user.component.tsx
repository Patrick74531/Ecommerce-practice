import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectCurrentUser, selectUserOpen } from "../../store/user/user.selector"
import { handleCartOpen } from "../../store/cart/cart.action"
import { handleUserOpen } from "../../store/user/user.action"
import { selectCartOpen } from "../../store/cart/cart.selector"
import './my-user.styles.scss'


const MyUser = () => {
    const dispatch = useDispatch();
    const isUserOpen = useSelector(selectUserOpen);
    const isCartOpen = useSelector(selectCartOpen);
    const currentUser = useSelector(selectCurrentUser);


    const openUserCenter = (event: any) => {
        event.stopPropagation();
        dispatch(handleUserOpen(!isUserOpen))
        if (isCartOpen)
            dispatch(handleCartOpen(false))
    }
    useEffect(() => {
        if (isUserOpen)
            document.addEventListener('click', openUserCenter);

        return () => {
            document.removeEventListener('click', openUserCenter);
        }
    }, [openUserCenter]);

    return (
        <div
            className="my-user-container"
            onClick={openUserCenter}
        >

            <img className="avatar" src={currentUser?.photoURL ? currentUser?.photoURL : '/logo192.png'} alt="" />
            <span>{currentUser?.displayName}</span>
        </div>
    )
}

export default MyUser