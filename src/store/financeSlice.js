import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { safeFetch } from "../api/ApiService";
import { transformApiData } from "../utils/helpers";

const initialState = {
  transactions: [],
  status: "idle",
  error: null,
};
export const fetchAllTransactions = createAsyncThunk(
  "finance/fetch",
  async () => {
    const response = await safeFetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("3. Thunk started!");
    const transformedData = transformApiData(response);
    return transformedData;
  }
);

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    resetFinance(state) {
      state.transactions = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTransactions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllTransactions.fulfilled, (state, action) => {
        state.status = "fulfilled";

        state.transactions = action.payload;
      })
      .addCase(fetchAllTransactions.rejected, (state, action) => {
        state.status = "failed";

        state.error = action.error.message;
      });
  },
});
export const { resetFinance } = financeSlice.actions;

export const getFinanceData = (state) => state.finance;

export default financeSlice.reducer;
