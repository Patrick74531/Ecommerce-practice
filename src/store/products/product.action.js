import { PRODUCTS_ACTION_TYPES } from "./product.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const setProduct = (product) =>
    createAction(PRODUCTS_ACTION_TYPES.ADD_PRODUCTS, product);

export const fetchProductsStart = () =>
    createAction(PRODUCTS_ACTION_TYPES.SET_PRODUCTS_START);

export const fetchProductsSuccess = (productsArray) =>
    createAction(
        PRODUCTS_ACTION_TYPES.SET_PRODUCTS_SUCCESS,
        productsArray
    )

export const fetchProductsFailed = (error) =>
    createAction(
        PRODUCTS_ACTION_TYPES.SET_PRODUCTS_FAILED,
        error
    )

export const fetchProductsAsync = () => async (dispatch) => {

    dispatch(fetchProductsStart());
    try {
        const productsArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchProductsSuccess(productsArray));
    } catch (error) {
        dispatch(fetchProductsFailed(error));
    }
}