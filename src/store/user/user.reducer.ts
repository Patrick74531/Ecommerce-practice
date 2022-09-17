import { AnyAction } from 'redux';
import { signInFailed, signInSuccess, signUpFailed, signOutFailed, signOutSuccess, handleUserOpen } from './user.action';
import { UserData } from '../../utils/firebase/firebase.utils';

export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
    readonly isUserOpen: boolean;

}

const INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null,
    isUserOpen: false,

}

export const userReducer = (state = INITIAL_STATE,
    action: AnyAction): UserState => {
    if (signInSuccess.match(action)) {
        return {
            ...state,
            currentUser: action.payload,
        };
    };
    if (signOutSuccess.match(action)) {
        return {
            ...state,
            currentUser: null,
        };
    };
    if (signInFailed.match(action) ||
        signUpFailed.match(action) ||
        signOutFailed.match(action)) {
        return {
            ...state,
            error: action.payload
        };
    };
    if (handleUserOpen.match(action)) {
        return {
            ...state,
            isUserOpen: action.payload,
        }
    }

    return state
}
