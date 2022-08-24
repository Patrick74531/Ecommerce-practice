import React, { useContext } from 'react'
import ProductCard from '../../components/product-card/product-card.component'
import { ProductContext } from '../../contexts/products.context'
import './shop.component.scss'
const Shop = () => {
    const { product } = useContext(ProductContext)
    return (
        <div className='products-container'>
            {product.map(({ id, name, price, imageUrl }) =>
                <ProductCard key={id} name={name} price={price} imageUrl={imageUrl} />
            )}
        </div>
    )
}

export default Shop