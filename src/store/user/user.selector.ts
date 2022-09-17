import { createSelector } from "reselect";
import { UserState } from "./user.reducer";
import { RootState } from "../store";
export const selectUserReducer = (state: RootState): UserState => state.user;
export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (user) => user.currentUser);

export const selectUserOpen = createSelector(
    [selectUserReducer],
    cart => cart.isUserOpen
);
