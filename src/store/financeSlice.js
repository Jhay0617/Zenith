import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { safeFetch } from "../api/ApiService";
import { transformApiData } from "../utils/helpers";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};
export const fetchAllTransactions = createAsyncThunk(
  "finance/fetchAllTransactions",
  async () => {
    const response = await safeFetch("jsonplaceholder.typicode.com");
    const transformedData = transformApiData(response);
    return transformedData;
  }
);

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    resetFinance(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTransactions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllTransactions.fulfilled, (state, action) => {
        state.fulfilled = "fulfilled";

        state.items = action.payload;
      })
      .addCase(fetchAllTransactions.rejected, (state, action) => {
        state.rejected = "failed";

        state.error = action.error.message;
      });
  },
});
export const { resetFinance } = financeSlice.actions;
export default financeSlice.reducer;
