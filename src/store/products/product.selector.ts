import { createSelector } from "reselect";
import { ProductState } from "./product.reducer";
import { ProductMap } from "./product.types";
import { RootState } from "../store";
const selectProductReducer = (state: RootState): ProductState => state.products;

export const selectProducts = createSelector(
    [selectProductReducer],
    (products) => products.products
);

export const selectCurrentProduct = createSelector(
    [selectProducts],
    (products): ProductMap =>
        products.reduce((acc, product) => {
            const { title, items } = product;
            acc[title.toLowerCase()] = items;
            return acc
        }, {} as ProductMap));

export const selectProductsIsLoading = createSelector(
    [selectProductReducer],
    products => products.isLoading
)