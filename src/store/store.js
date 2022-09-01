import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

const middleWares = [process.env.NODE_ENV === 'development' && logger, thunk].filter(
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

// export const persistor = persistStore(store);