import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./signInSlice";
const appStore = configureStore({
  reducer: {
    signin: signInReducer,
  },
});
export default appStore;
