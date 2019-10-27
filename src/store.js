import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducer';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from './saga'
import { persistStore, persistReducer } from 'redux-persist'
import localForage from 'localforage'


const persistConfig = {
    key: 'root',
    storage: localForage,
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
export const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

export default store;