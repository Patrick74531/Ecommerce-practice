import { Product, PRODUCTS_ACTION_TYPES } from "./product.types";
import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";

export type FetchProductsStart =
    Action<PRODUCTS_ACTION_TYPES.SET_PRODUCTS_START>;

export type FetchProductsSuccess =
    ActionWithPayload<PRODUCTS_ACTION_TYPES.SET_PRODUCTS_SUCCESS,
        Product[]
    >;

export type FetchProductsFailed =
    ActionWithPayload<PRODUCTS_ACTION_TYPES.SET_PRODUCTS_FAILED,
        Error
    >;

export type ProductAction =
    FetchProductsStart
    | FetchProductsSuccess
    | FetchProductsFailed;
// export const setProduct = (product) =>
//     createAction(PRODUCTS_ACTION_TYPES.ADD_PRODUCTS, product);

export const fetchProductsStart = withMatcher((): FetchProductsStart =>
    createAction(PRODUCTS_ACTION_TYPES.SET_PRODUCTS_START));

export const fetchProductsSuccess = withMatcher((productsArray: Product[]): FetchProductsSuccess =>
    createAction(
        PRODUCTS_ACTION_TYPES.SET_PRODUCTS_SUCCESS,
        productsArray
    ));

export const fetchProductsFailed = withMatcher((error: Error): FetchProductsFailed =>
    createAction(
        PRODUCTS_ACTION_TYPES.SET_PRODUCTS_FAILED,
        error
    ));

