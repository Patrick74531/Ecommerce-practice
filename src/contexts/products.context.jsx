import { createContext, useEffect, useReducer, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";
export const ProductContext = createContext({
    products: {},
});

const PRODUCTS_ACTION_TYPES = {
    ADD_PRODUCTS: 'ADD_PRODUCTS',
}
const ProductsReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case PRODUCTS_ACTION_TYPES.ADD_PRODUCTS:
            return {
                ...state,
                products: payload,
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}
const INITIAL_STATE = {
    products: null,
}

export const ProductProvider = ({ children }) => {
    const [{ products }, dispatch] = useReducer(ProductsReducer, INITIAL_STATE);
    const setProduct = (product) => {
        dispatch(createAction(PRODUCTS_ACTION_TYPES.ADD_PRODUCTS, product))
    };
    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            // console.log(categoryMap);
            setProduct(categoryMap);
        }
        getCategoryMap();
    }, [])
    // console.log(products)
    // const [products, setProduct] = useState({});
    const value = { products };
    return <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
}
