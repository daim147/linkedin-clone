import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
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
  },
});
const userReducers = userSlice.reducer;
const { login, logout, nameFetch } = userSlice.actions;
export { login, logout, nameFetch, userReducers };
