import { createSlice } from "@reduxjs/toolkit";
import { SEARCH_COUNT } from "../constants";

const setSearchCountSlice = createSlice({
  name: "searchCount",
  initialState: SEARCH_COUNT,
  reducers: {
    reduceSearchCount() {
      return SEARCH_COUNT > 0 && SEARCH_COUNT - 1;
    },
  },
});
export const { reduceSearchCount } = setSearchCountSlice.actions;
export default setSearchCountSlice.reducer;
