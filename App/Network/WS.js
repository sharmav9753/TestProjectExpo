import React from "react";
import Expo from 'expo';

export const initTicker = (msg, callback) => {
  const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
  ws.onopen = () => {
    // connection opened
    console.log('open >>> ');
    ws.send(msg); // send a message
  };
  ws.onmessage = (response) => {
    callback(response.data);
  };
};

export const initTrades = (msg, callback) => {
  const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
  ws.onopen = () => {
    // connection opened
    console.log('open >>> ');
    ws.send(msg); // send a message
  };
  ws.onmessage = (response) => {
    callback(response.data);
  };
};

export const initOrderBook = (msg, callback) => {
  const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
  ws.onopen = () => {
    // connection opened
    console.log('open >>> ');
    ws.send(msg); // send a message
  };
  ws.onmessage = (response) => {
    callback(response.data);
  };
};
