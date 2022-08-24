import { useState, createContext } from "react";
import PRODUCT from '../shop-data.json'
export const ProductContext = createContext({
    product: [],
});

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState(PRODUCT);
    const value = { product };
    return <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
}
