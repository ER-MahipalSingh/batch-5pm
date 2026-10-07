import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userReducer/userSlice";
import productReducer from "./productReducer/productSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    products: productReducer,
  },
});
