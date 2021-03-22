import { combineReducers } from "redux";
import { loadingReducer } from "./loading";
import {tickerReducer } from "./ticker";
import {tradesReducer } from "./trades";
import {bookReducer } from "./book";

const createRootReducer = () =>
  combineReducers({
    loading: loadingReducer,
    ticker: tickerReducer,
    trades: tradesReducer,
  });

export default createRootReducer;