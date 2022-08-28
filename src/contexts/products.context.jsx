import { useState, createContext, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
export const ProductContext = createContext({
    products: {},
});

export const ProductProvider = ({ children }) => {
    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            // console.log(categoryMap);
            setProduct(categoryMap);
        }
        getCategoryMap();
    }, [])

    const [products, setProduct] = useState({});
    const value = { products };
    return <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
}
