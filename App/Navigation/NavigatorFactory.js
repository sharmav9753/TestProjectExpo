import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from './screens.json';
import Trading from '../Screens/Trading';
import * as Colors from '../Constants/Colors';

const Stack = createStackNavigator();

export const NavigatorFactory = () => (
  <Stack.Navigator
    headerMode="screen"
    options= {{headerStyles: { backgroundColor: Colors.baseBackground }}}
  >
    <Stack.Screen
      name={screens.Trading.Name}
      component={Trading}
      options={() => ({
        title: screens.Trading.Title,
        headerShown: false,
        headerStyles: { backgroundColor: Colors.baseBackground }
      })}
    />
  </Stack.Navigator>
);
