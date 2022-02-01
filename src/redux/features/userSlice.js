import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  error: "",
  data: {},
};

const { reducer: userReducer, actions } = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default userReducer;
export const { setUser } = actions;

export const selectUser = (state) => state.user.data;
