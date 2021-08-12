import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "pending",
    isFetch: false,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    nameFetch(state, action) {
      state.isFetch = action.payload;
    },
    userPending(state) {
      state.user = "pending";
    },
  },
});
const userReducers = userSlice.reducer;
const { login, logout, nameFetch, userPending } = userSlice.actions;
export { login, logout, nameFetch, userReducers, userPending };
