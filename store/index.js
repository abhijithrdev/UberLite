// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import notificationsReducer from "./notificationsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  notifications: notificationsReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "cart"], // persist auth and cart only
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
