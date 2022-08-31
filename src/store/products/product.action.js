import { PRODUCTS_ACTION_TYPES } from "./product.types";
import { createAction } from "../../utils/reducer/reducer.utils";
export const setProduct = (product) =>
    createAction(PRODUCTS_ACTION_TYPES.ADD_PRODUCTS, product);