import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import * as Colors from '../../Constants/Colors';
import * as Fonts from '../../Constants/Fonts';
import Accordion from './Components/Accordion';
import TickerView from './Components/TickerView';

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

const Trading = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    initSocket();
  }, []);

  return (
    <React.Fragment>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.mainContainer}>
        <TickerView
          name='BTC/USD'
          icon='logo-bitcoin'
          vol='13,962 BTC'
          low='9,777.0'
          price='9,974.0'
          plPercentage='86.50 ▲ (0.87%)'
        />
        <Accordion title='ORDER'>
          <Text>Hello</Text>
        </Accordion>
        <Accordion title='TRADE'>
          <Text>Hello</Text>
        </Accordion>
      </SafeAreaView>
    </React.Fragment>
  )
}

export default Trading
