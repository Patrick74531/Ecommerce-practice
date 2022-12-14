import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom'
import { selectCurrentProduct, selectProductsIsLoading } from '../../store/products/product.selector'
import ProductCard from '../product-card/product-card.component'
import Spinner from '../spinner/spinner.component'

import './product-preview.styles.scss'
const ProductPreview = () => {
    const products = useSelector(selectCurrentProduct);
    const isLoading = useSelector(selectProductsIsLoading);

    return (
        <div className='category-preview-container'>
            {isLoading ? <Spinner /> :
                (products && Object.keys(products).map((title) => (
                    <div key={title}>

                        <h2>
                            <Link to={`/shop/${title}`} className='title'>
                                {title.toUpperCase()}
                            </Link>
                        </h2>
                        <div className='preview'>
                            {
                                products[title] && products[title]
                                    .filter((_, index) => index < 4)
                                    .map((product) =>
                                        <ProductCard key={product.id} product={product} />
                                    )
                            }
                        </div>
                    </div>)))
            }

        </div>
    )
}

export default ProductPreview