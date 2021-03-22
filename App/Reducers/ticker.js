import { createSlice } from "@reduxjs/toolkit";

const tickerSlice = createSlice({
  name: "loading",
  initialState: {
    symbol: '',
    bid: 0,
    bidSize: 0,
    ask: 0,
    askSize: 0,
    dailyChange: 0,
    dailyChangeRelative: 0,
    lastPrice: 0,
    volume: 0,
    high: 0,
    low: 0,
  },
  reducers: {
    setTradeData(state, action) {
      const {
        symbol,
        bid,
        bidSize,
        ask,
        askSize,
        dailyChange,
        dailyChangeRelative,
        lastPrice,
        volume,
        high,
        low,
      } = action.payload;
      state.symbol = symbol;
      state.bid = bid;
      state.bidSize = bidSize;
      state.ask= ask;
      state.askSize = askSize;
      state.dailyChange = dailyChange;
      state.dailyChangeRelative = dailyChangeRelative;
      state.lastPrice = lastPrice;
      state.volume = volume;
      state.high = high;
      state.low = low;
    },
  },
});

const { actions, reducer: tickerReducer } = tickerSlice;

const { setTradeData } = actions;

export { tickerReducer, setTradeData };
