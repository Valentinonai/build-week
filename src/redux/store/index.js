import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import currentUserReducer from "../reducers/currentUser";
import profileReducer from "../reducers/profileReducer";
import modalReducer from "../reducers/modalReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["modal"]
};

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  profile: profileReducer,
  modal: modalReducer
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: getDefaultMiddleware({ serializableCheck: false })
});

export const persiStore = persistStore(store);
