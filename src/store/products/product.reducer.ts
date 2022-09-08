import { AnyAction } from "redux";
import { PRODUCTS_ACTION_TYPES, Product } from "./product.types";
import { fetchProductsFailed, fetchProductsStart, fetchProductsSuccess } from "./product.action";

export type ProductState = {
    readonly products: Product[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const INITIAL_STATE: ProductState = {
    products: [],
    isLoading: false,
    error: null,
}
export const productsReducer = (state = INITIAL_STATE,
    action: AnyAction
): ProductState => {
    if (fetchProductsStart.match(action)) {
        return { ...state, isLoading: true };
    }
    if (fetchProductsSuccess.match(action)) {
        return {
            ...state,
            products: action.payload,
            isLoading: false,
        }
    }

    if (fetchProductsFailed.match(action)) {
        return {
            ...state,
            error: action.payload,
            isLoading: false
        }
    }
    return state
};

