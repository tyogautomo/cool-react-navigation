import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import { store } from './app/redux/store';
import { mainBottomTabNavigator } from './app/navigations/MainBottomTabNavigator/MainBottomTabNavigator'

enableScreens();

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
