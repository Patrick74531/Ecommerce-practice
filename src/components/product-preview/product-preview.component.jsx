import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component'
import { ProductContext } from '../../contexts/products.context'
import './product-preview.component.scss'
const ProductPreview = () => {
    const { products } = useContext(ProductContext)
    return (
        <div className='category-preview-container'>
            {
                Object.keys(products).map((title) => (
                    <div key={title}>

                        <h2>
                            <Link to={`/shop/${title}`} className='title'>
                                {title.toUpperCase()}
                            </Link>
                        </h2>
                        <div className='preview'>
                            {
                                products[title]
                                    .filter((_, index) => index < 4)
                                    .map((product) =>
                                        <ProductCard key={product.id} product={product} />
                                    )
                            }
                        </div>
                    </div>))
            }

        </div>
    )
}

export default ProductPreview