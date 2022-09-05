import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'


const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({ reducer: persistedReducer, middleware: [process.env.NODE_ENV === 'development' && logger, sagaMiddleware].filter(Boolean) })

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)