import { configureStore } from "@reduxjs/toolkit";
import contractorsReducer from "./features/contractorsSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    contractors: contractorsReducer,
  },
});
