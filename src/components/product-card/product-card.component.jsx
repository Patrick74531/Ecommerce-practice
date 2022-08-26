import React, { useContext } from 'react'
import Button from '../button/button.component'
import { CartContext } from '../../contexts/cart.context'
import './product-card.component.scss'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const { addItemToCart, cartItems } = useContext(CartContext)
    const addProductToCart = () => {
        addItemToCart(product)
        console.log(cartItems)
    }


    return (
        <div className='product-card'>
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