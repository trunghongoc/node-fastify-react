import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { counterReducer } from '@/store/slices/counter'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    counter: counterReducer,
  }),
)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
