import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesDataSlice";
import gptSearchReducer from "./gptSlice";
import searchCountReducer from "./setSearchCountSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptSearchReducer,
    searchCount: searchCountReducer,
  },
});
export default appStore;
