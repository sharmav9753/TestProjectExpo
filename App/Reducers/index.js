import { combineReducers } from "redux";
import { loadingReducer } from "./loading";
import {tickerReducer  } from "./ticker";

const createRootReducer = () =>
  combineReducers({
    loading: loadingReducer,
    ticker: tickerReducer,
  });

export default createRootReducer;