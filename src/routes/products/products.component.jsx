import React, { useEffect, useContext, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';
import './products.component.scss'
const Products = () => {
    const { product } = useParams();
    const [productShown, setProductShown] = useState();
    const { products } = useContext(ProductContext);
    useEffect(() => {
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