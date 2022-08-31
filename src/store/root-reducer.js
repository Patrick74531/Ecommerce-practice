import { combineReducers } from "redux";
import { productsReducer } from "./products/product.reducer";
import { userReducer } from "./user/user.reducer";
export const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
})