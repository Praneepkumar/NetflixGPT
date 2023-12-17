import { createSlice } from "@reduxjs/toolkit";

const languagesSlice = createSlice({
  name: "setLanguage ",
  initialState: { language: "en" },
  reducers: {
    getLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const { getLanguage } = languagesSlice.actions;
export default languagesSlice.reducer;
