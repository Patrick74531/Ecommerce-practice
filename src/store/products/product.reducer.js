import { PRODUCTS_ACTION_TYPES } from "./product.types";

const INITIAL_STATE = {
    products: [],
}
export const productsReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case PRODUCTS_ACTION_TYPES.ADD_PRODUCTS:
            return {
                ...state,
                products: payload,
            }
        default:
            return state
    }
}
