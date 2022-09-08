import { createStore, compose, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const middleWares = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware].filter(
    (middleware): middleware is Middleware => Boolean(middleware)
    // 把返回值收窄为Middleware类型，而不是Boolean类型
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