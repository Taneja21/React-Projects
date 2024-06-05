import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.auth = false;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.auth = false;
      state.userData = null;
    },
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
