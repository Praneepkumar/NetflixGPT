import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signin",
  initialState: null,
  reducers: {
    addUser(state, action) {
      return action.payload;
    },
    removeUser() {
      return null;
    },
  },
});
export const { addUser, removeUser } = signInSlice.actions;
export default signInSlice.reducer;
