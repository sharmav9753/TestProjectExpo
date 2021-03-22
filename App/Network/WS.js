import React from "react";
import Expo from 'expo';

const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

export const initSocketForChannel = (msg, callback) => {
  ws.onopen = () => {
    // connection opened
    console.log('open >>> ');
    ws.send(msg); // send a message
  };
  ws.onmessage = (response) => {
    console.log(response)
    callback(response.data);
  };
};
