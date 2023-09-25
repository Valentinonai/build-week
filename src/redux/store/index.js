import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import currentUserReducer from "../reducers/currentuser";

const persistConfig = {
  key: "root",
  storage: storage
};

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: getDefaultMiddleware({ serializableCheck: false })
});

export const persiStore = persistStore(store);
