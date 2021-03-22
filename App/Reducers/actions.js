import { initTicker, initOrderBook, initTrades } from '../Network/WS';
import { setTickerData } from "./ticker";
import { addTradeData } from "./trades";
import { addBookData } from "./book";
import _ from 'lodash';

const currencyInfo = {
  cryptoCurrency: 'BTC',
  currency: 'USD',
  cryptoCurrencyIcon: 'logo-bitcoin'
}

const tickerRequest = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'ticker', 
  symbol: `t${currencyInfo.cryptoCurrency}${currencyInfo.currency}` //tBTCUSD 
});

const tradesRequest = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'trades', 
  symbol: `t${currencyInfo.cryptoCurrency}${currencyInfo.currency}` //tBTCUSD 
});

const bookRequest = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'book', 
  symbol: `t${currencyInfo.cryptoCurrency}${currencyInfo.currency}` //tBTCUSD 
});

const createTickerObject = (res) => {
  try {
    let dataObject = {};
    const data = JSON.parse(res);
    if (_.isArray(data)) {
      dataObject = { 'channelId': data[0]};
      const keys = [
      'bid',
      'bidSize',
      'ask',
      'askSize',
      'dailyChange',
      'dailyChangeRelative',
      'lastPrice',
      'volume',
      'high',
      'low',
      ]
      const channelData = {};
      if (!_.isEmpty(data[1])) {
        _.map(data[1], (value, index) => {
          channelData[keys[index]] = value;
        })
      }
      dataObject['channelData'] = channelData;
      return dataObject;
    }
  } catch (err) {
    console.log('Error', err);
  }
}

const createTradesArray = (res) => {
  try {
    let dataObject = {};
    const data = JSON.parse(res);
    if (_.isArray(data)) {
      dataObject = { 'channelId': data[0]};
      const keys = [
      'id',
      'mts',
      'amount',
      'price',
      ]
      const channelData = {};
      if (!_.isEmpty(data[2])) {
        _.map(data[2], (value, index) => {
          channelData[keys[index]] = value;
        })
      }
      dataObject['channelData'] = channelData;
      return [dataObject];
    }
  } catch (err) {
    console.log('Error', err);
  }
}

const createBookArray = (res) => {
  try {
    let dataObject = {};
    const data = JSON.parse(res);
    if (_.isArray(data)) {
      dataObject = { 'channelId': data[0]};
      const keys = [
      'price',
      'count',
      'amount',
      ]
      const channelData = {};
      if (!_.isEmpty(data[1])) {
        _.map(data[1], (value, index) => {
          channelData[keys[index]] = value;
        })
      }
      dataObject['channelData'] = channelData;
      return [dataObject];
    }
  } catch (err) {
    console.log('Error', err);
  }
}

export const listenForTicker = () => (dispatch, getState) => {
  initTicker(tickerRequest, (data) => {
    const {channelData} = createTickerObject(data);
    dispatch(setTickerData(channelData));
  })
}

export const listenForTrades = () => (dispatch, getState) => {
  initTrades(tradesRequest, (data) => {
    const tradesData = createTradesArray(data) || [];
    if(tradesData.length) {
      const {channelData} = tradesData[0];
      console.log('Trades data: ',channelData)
      dispatch(addTradeData(channelData));
    }
  })
}

export const listenForBook = () => (dispatch, getState) => {
  initOrderBook(bookRequest, (data) => {
    const bookData = createBookArray(data);
    if(bookData.length) {
      console.log('Ticker data: ', bookData);
      dispatch(addBookData(bookData));
    }
  })
}