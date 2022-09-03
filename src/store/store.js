import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware].filter(
    Boolean
);


const composedEnhancers = compose(applyMiddleware(...middleWares));

// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['user'],
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(rootReducer, undefined, composedEnhancers);
sagaMiddleware.run(rootSaga);
// export const persistor = persistStore(store);