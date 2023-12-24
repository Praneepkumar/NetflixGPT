import { createSlice } from "@reduxjs/toolkit";
import { SEARCH_COUNT } from "../constants";

const setSearchCountSlice = createSlice({
  name: "searchCount",
  initialState: SEARCH_COUNT,
  reducers: {
    reduceSearchCount(state) {
      if (SEARCH_COUNT === 0) return;
      return SEARCH_COUNT - 1;
    },
  },
});
export const { reduceSearchCount } = setSearchCountSlice.actions;
export default setSearchCountSlice.reducer;
