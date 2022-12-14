import { AnyAction } from "redux";
import { CartItem } from "./cart.types";
import { handleCartOpen, setCartItem } from "./cart.action";
export type CartState = {
    readonly isCartOpen: boolean;
    readonly cartItems: CartItem[];
}
const INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
}

export const cartReducer = (
    state = INITIAL_STATE, action: AnyAction): CartState => {
    if (handleCartOpen.match(action)) {
        return {
            ...state,
            isCartOpen: action.payload,
        }
    }

    if (setCartItem.match(action)) {
        return {
            ...state,
            cartItems: action.payload,
        }
    }
    return state
}
