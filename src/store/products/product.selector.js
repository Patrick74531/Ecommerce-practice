import { createSelector } from "reselect";

const selectProductReducer = (state) => state.products;

export const selectProducts = createSelector(
    [selectProductReducer],
    (products) => products.products
);

export const selectCurrentProduct = createSelector(
    [selectProducts],
    products => products.reduce((acc, product) => {
        const { title, items } = product;
        acc[title.toLowerCase()] = items;
        return acc
    }, {}));

export const selectProductsIsLoading = createSelector(
    [selectProductReducer],
    products => products.isLoading
)