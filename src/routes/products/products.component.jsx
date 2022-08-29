import React, { useEffect, useContext, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';
import './products.styles.scss'
const Products = () => {
    const { product } = useParams();
    console.log(product);
    const [productShown, setProductShown] = useState();
    const { products } = useContext(ProductContext);
    useEffect(() => {
        if (products && products)
            setProductShown(products[product]);
    }, [product, products]);
    console.log(productShown);
    return (
        <Fragment>
            <h2 className='products-title'>{product.toUpperCase()}</h2>
            <div className='products-container'>

                {
                    productShown && productShown
                        .map((product) => (<ProductCard key={product.id} product={product} />))
                }
            </div>
        </Fragment>
    )
}

export default Products