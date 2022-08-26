import { useState, createContext } from "react";
import PRODUCT from '../shop-data.json'
export const ProductContext = createContext({
    products: [],
});

export const ProductProvider = ({ children }) => {
    const [products, setProduct] = useState(PRODUCT);
    const value = { products };
    return <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
}
