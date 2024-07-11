import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./features/authSlice";

const store = configureStore({
  reducer: {
    authentication: AuthSlice,
  },
});

export default store;
