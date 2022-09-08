import { all, call } from 'typed-redux-saga/macro'
import { ProductsSaga } from './products/product.saga'
import { userSagas } from './user/user.saga';

export function* rootSaga() {
    yield* all([call(ProductsSaga), call(userSagas)]);
}