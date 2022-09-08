export enum PRODUCTS_ACTION_TYPES {
    SET_PRODUCTS_START = 'products/SET_PRODUCTS_START',
    SET_PRODUCTS_SUCCESS = 'products/SET_PRODUCTS_SUCCESS',
    SET_PRODUCTS_FAILED = 'products/SET_PRODUCTS_FAILED',
}

export type ProductItem = {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}

export type Product = {
    title: string;
    imageUrl: string;
    items: ProductItem[];
}

export type ProductMap = {
    [key: string]: ProductItem[]
}