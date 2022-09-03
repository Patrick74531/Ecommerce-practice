import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchProductsSuccess, fetchProductsFailed } from './product.action';
import { PRODUCTS_ACTION_TYPES } from './product.types';


export function* fetchProductsAsync() {
    try {
        const productsArray = yield call(getCategoriesAndDocuments, 'categories');
        yield put(fetchProductsSuccess(productsArray));

    } catch (error) {
        yield put(fetchProductsFailed(error));
    }
}

export function* onFetchProducts() {
    yield takeLatest(PRODUCTS_ACTION_TYPES.SET_PRODUCTS_START, fetchProductsAsync);
}

export function* ProductsSaga() {
    yield all([call(onFetchProducts)]);
}
