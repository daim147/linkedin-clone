import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "../features/userSlice";

export const store = configureStore({
  reducer: {
    userAuth: userReducers,
  },
});
