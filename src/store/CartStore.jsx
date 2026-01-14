import { combineReducers,configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/CartSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
}


const rootReducer = combineReducers({
    cart:cartReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)



export const cartStore = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(cartStore)