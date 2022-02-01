import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  error: "",
  data: [],
};
const { reducer: contractorsReducer } = createSlice({
  name: "contractors",
  initialState,
  reducer: {},
});

export default contractorsReducer;
export const selectContractors = (state) => state.contractors.data;
