import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import ProductPreview from '../../components/product-preview/product-preview.component';
import Products from '../products/products.component';
import { fetchProductsAsync } from '../../store/products/product.action';
const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsAsync())
    }, [])
    return (
        <Routes>
            <Route index element={<ProductPreview />} />
            <Route path=':product' element={<Products />} />
        </Routes>


    )
}

export default Shop