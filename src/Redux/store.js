import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";

const Store = configureStore({
  reducer: { authReducer: authReducer },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default Store;
