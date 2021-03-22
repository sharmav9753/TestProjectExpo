import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from './screens.json';
import Trading from '../Screens/Trading';

const Stack = createStackNavigator();

export const NavigatorFactory = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen
      name={screens.Trading.Name}
      component={Trading}
      options={{title: screens.Trading.Title}}
    />
  </Stack.Navigator>
);
