import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector'
import ProductCard from '../../components/product-card/product-card.component';
import { selectCurrentProduct, selectProductsIsLoading } from '../../store/products/product.selector';
import Spinner from '../../components/spinner/spinner.component';
import './products.styles.scss'

type ProductRouteParams = {
    product: string;
}
const Products = () => {
    const { product } = useParams<keyof ProductRouteParams>() as ProductRouteParams;
    const products = useSelector(selectCurrentProduct);
    const isLoading = useSelector(selectProductsIsLoading);
    const [productShown, setProductShown] = useState(products[product]);

    useEffect(() => {
        setProductShown(products[product]);
    }, [product, products]);
    console.log(productShown);
    return (
        <Fragment>
            <h2 className='products-title'>{product.toUpperCase()}</h2>
            <div className='products-container'>
                {isLoading ? <Spinner /> : (productShown && productShown
                    .map((product) => (<ProductCard key={product.id} product={product} />)))}
            </div>
        </Fragment>
    )
}

export default Products