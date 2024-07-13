import { createSlice } from "@reduxjs/toolkit";

let userdata =
  localStorage.getItem("userdata") != ""
    ? JSON.parse(localStorage.getItem("userdata"))
    : null;
let instructor = JSON.parse(localStorage.getItem("instructor"));
let learner = JSON.parse(localStorage.getItem("learner"));
let authStatus = JSON.parse(localStorage.getItem("authStatus"));

const initialState = {
  authStatus: authStatus,
  isInstrcutor: instructor,
  isLearner: learner,
  userData: userdata,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    instructorLogin: (state, action) => {
      state.authStatus = true;
      state.isInstrcutor = true;
      state.isLearner = false;
      state.userData = action.payload.user;
      localStorage.setItem("authStatus", JSON.stringify(state.authStatus));
      localStorage.setItem("instructor", JSON.stringify(state.isInstrcutor));
      localStorage.setItem("learner", JSON.stringify(state.isLearner));
      localStorage.setItem("userdata", JSON.stringify(state.userData));
    },
    learnerLogin: (state, action) => {
      state.authStatus = true;
      state.isInstrcutor = false;
      state.isLearner = true;
      state.userData = action.payload.user;
      localStorage.setItem("authStatus", JSON.stringify(state.authStatus));
      localStorage.setItem("instructor", JSON.stringify(state.isInstrcutor));
      localStorage.setItem("learner", JSON.stringify(state.isLearner));
      localStorage.setItem("userdata", JSON.stringify(state.userData));
    },
    logout: (state) => {
      state.authStatus = false;
      state.isInstrcutor = false;
      state.isLearner = false;
      state.userData = null;
      localStorage.setItem("authStatus", JSON.stringify(state.authStatus));
      localStorage.setItem("instructor", JSON.stringify(state.isInstrcutor));
      localStorage.setItem("learner", JSON.stringify(state.isLearner));
      localStorage.setItem("userdata", JSON.stringify(state.userData));
    },
  },
});

export default authSlice.reducer;

export const { instructorLogin, learnerLogin, logout } = authSlice.actions;
