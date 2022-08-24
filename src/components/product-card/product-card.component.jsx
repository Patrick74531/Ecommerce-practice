import React from 'react'
import Button from '../button/button.component'
import './product-card.component.scss'
const ProductCard = ({ name, price, imageUrl }) => {
    return (
        <div className='product-card'>
            <img src={imageUrl} alt={name} />
            <Button buttonType='inverted' className='product-button'>
                ADD TO CART
            </Button>
            <div className='wrap'>
                <span>{name}</span>
                <span>{price}</span>
            </div>

        </div>)
}

export default ProductCard