import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    data: []
  },
  reducers: {
    addBookData(state, action) {
      const {
        amount,
        count,
        price
      } = action.payload;
      state.data.push({
        amount,
        count,
        price
      });
    },
  },
});

const { actions, reducer: bookReducer } = bookSlice;

const { addBookData } = actions;

export { bookReducer, addBookData };
