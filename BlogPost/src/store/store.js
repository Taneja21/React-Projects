import { configureStore } from "@reduxjs/toolkit";
import BlogPostreducers from "../features/authSlice";

const store = configureStore({
  reducer: BlogPostreducers,
});

export default store;
