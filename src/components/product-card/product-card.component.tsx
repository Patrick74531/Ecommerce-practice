import { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import Button from '../button/button.component'
// import { CartContext } from '../../contexts/cart.context'
import './product-card.styles.scss'
import { ProductItem } from '../../store/products/product.types';

type ProductCardProps = {
    product: ProductItem
}
const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const { name, price, imageUrl } = product
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    // const { addItemToCart, cartItems } = useContext(CartContext)
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))



    return (
        <div className='product-card'
            onClick={(ev) => ev.stopPropagation()}
        >
            <img src={imageUrl} alt={name} />
            <Button
                buttonType='inverted'
                className='product-button'
                onClick={addProductToCart}
            >
                ADD TO CART
            </Button>
            <div className='wrap'>
                <span>{name}</span>
                <span>{price}</span>
            </div>

        </div>)
}

export default ProductCard