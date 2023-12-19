import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    gptSearchResults: null,
  },
  reducers: {
    toggleShowGptSearch(state) {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTSearchResults(state, action) {
      const { movieNames, gptSearchResults } = action.payload;
      state.movieNames = movieNames;
      state.gptSearchResults = gptSearchResults;
    },
    clearSearch(state) {
      state.gptSearchResults = null;
    },
  },
});
export const { toggleShowGptSearch, addGPTSearchResults, clearSearch } =
  gptSlice.actions;
export default gptSlice.reducer;
