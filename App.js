import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { store } from './app/redux/store';
import { homeStackNavigator } from './app/navigations/HomeStackNavigator/HomeStackNavigator';
import { mainBottomTabNavigator } from './app/navigations/MainBottomTabNavigator/MainBottomTabNavigator'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {mainBottomTabNavigator()}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
