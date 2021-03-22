import { createSlice } from "@reduxjs/toolkit";

const tradesSlice = createSlice({
  name: "trades",
  initialState: {
    data: []
  },
  reducers: {
    addTradeData(state, action) {
      const {
        id,
        amount,
        mts,
        price
      } = action.payload;
      if(id) {
        state.data.push({id, amount, mts, price});
      }
    },
  },
});

const { actions, reducer: tradesReducer } = tradesSlice;

const { addTradeData } = actions;

export { tradesReducer, addTradeData };
