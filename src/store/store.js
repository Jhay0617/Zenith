import sessionStorage from "redux-persist/lib/storage/session";
import financeReducer from "./financeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { PERSIST, REHYDRATE } from "redux-persist/lib/constants";
import { persistStore } from "redux-persist";
const persistConfig = {
  key: "root",
  storage: sessionStorage,
};

const persistedReducer = (persistConfig, financeReducer);

export const store = configureStore({
  reducer: {
    finance: persistedReducer,
  },

  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleWare) => {
    getDefaultMiddleWare({
      serializableCheck: {
        ignoreActions: [PERSIST, REHYDRATE],
      },
    });
  },
});

export const persistor = persistStore(store);
