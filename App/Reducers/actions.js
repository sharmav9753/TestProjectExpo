import { initTicker } from '../Network/WS';
import { setTradeData } from "./ticker";
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
      console.log("Parsed: ", dataObject)
      return dataObject;
    }
  } catch (err) {
    console.log('Error', err);
  }
}

export const listenForTicker = () => (dispatch, getState) => {
  initTicker(tickerRequest, (data) => {
    const {channelData} = createTickerObject(data);
    console.log('Ticker data: ',channelData)
    dispatch(setTradeData(channelData));
  })
}