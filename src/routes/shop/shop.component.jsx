import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import ProductPreview from '../../components/product-preview/product-preview.component';
import Products from '../products/products.component';
import { setProduct } from '../../store/products/product.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryArray = await getCategoriesAndDocuments('categories');
            dispatch(setProduct(categoryArray));
        }
        getCategoryMap();
    }, [])
    return (
        <Routes>
            <Route index element={<ProductPreview />} />
            <Route path=':product' element={<Products />} />
        </Routes>


    )
}

export default Shop