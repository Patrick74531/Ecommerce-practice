import { createSelector } from "reselect";

const selectProductReducer = (state) => state.products;

export const selectProducts = createSelector(
    [selectProductReducer],
    (state) => state.products
);

export const selectCurrentProduct = createSelector(
    [selectProducts],
    products => products.reduce((acc, product) => {
        const { title, items } = product;
        acc[title.toLowerCase()] = items;
        return acc
    }, {}));
