import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "@/redux/productApi";

export const makeStore = () =>
  configureStore({
    reducer: {
      [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
  });
