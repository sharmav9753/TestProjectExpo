import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import _ from 'lodash';
import * as Colors from '../../Constants/Colors';
import * as Fonts from '../../Constants/Fonts';
import {
  initTicker,
  initTrades,
  initOrderBook
} from '../../Network/WS'
import Accordion from './Components/Accordion';
import TickerView from './Components/TickerView';
import OrderBook from './Components/OrderBook';
import Trades from './Components/Trades';
import { useDispatch, useSelector } from 'react-redux';
import {createSelector} from '@reduxjs/toolkit';
import {listenForTicker} from '../../Reducers/actions'
import ConnectivityToggle from "./Components/ConnectivityToggle";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.baseBackground,
  },
  message: {
    fontSize: Fonts.largest,
    fontWeight: Fonts.bold,
    color: Colors.textBlack,
    alignSelf: 'center'
  }
})

const currencyInfo = {
  cryptoCurrency: 'BTC',
  currency: 'USD',
  cryptoCurrencyIcon: 'logo-bitcoin'
}

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

const getVolume = (value, cryptoCurrency) => `${Math.round(value)} ${cryptoCurrency}`

const tickerSelector = createSelector(state => state.ticker, ticker => ticker)

const Trading = () => {
  const ticker = useSelector(tickerSelector);
  const dispatch = useDispatch();

  // const [ticker, setTicker] = useState([]);
  const [trades, setTrades] = useState([]);
  const [orderBook, setOrderBook] = useState([]);

  useEffect(() => {
    dispatch(listenForTicker());
    initTrades(tradesRequest, (data) => setTrades(createTradesArray(data)));
    initOrderBook(bookRequest, (data) => setOrderBook(createBookArray(data)));
  }, []);

  return (
    <React.Fragment>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.mainContainer}>
        <ConnectivityToggle />
        { !_.isEmpty(ticker) && (
          <TickerView
            name={`${currencyInfo.cryptoCurrency}/${currencyInfo.currency}`}
            icon={currencyInfo.cryptoCurrencyIcon}
            vol={getVolume(ticker.volume, currencyInfo.cryptoCurrency)}
            high={ticker.high}
            low={ticker.low}
            price={Math.round(ticker.lastPrice)}
            plPercentage={ticker.dailyChangeRelative}
        />)}
        { !_.isEmpty(orderBook) && (
          <Accordion title="ORDER">
            <OrderBook orderData={orderBook}/>
          </Accordion>
        )}
        { !_.isEmpty(trades) && (
          <Accordion title="TRADE">
            <Trades tradeData={trades} />
          </Accordion>
        )}
      </SafeAreaView>
    </React.Fragment>
  )
}

export default Trading
