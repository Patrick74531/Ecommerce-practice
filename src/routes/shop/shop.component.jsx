import { Route, Routes } from 'react-router-dom';
import ProductPreview from '../../components/product-preview/product-preview.component';
import Products from '../products/products.component';
const Shop = () => {

    return (
        <Routes>
            <Route index element={<ProductPreview />} />
            <Route path=':product' element={<Products />} />
        </Routes>


    )
}

export default Shop