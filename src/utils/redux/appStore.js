import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesDataSlice";
import gptSearchReducer from "./gptSlice";
import getLanguageReducer from "./languagesSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptSearchReducer,
    setLanguage: getLanguageReducer,
  },
});
export default appStore;
