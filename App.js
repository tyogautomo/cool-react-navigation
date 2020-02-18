import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { store } from './app/redux/store';
import { homeStackNavigator } from './app/navigations/HomeStackNavigator/HomeStackNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {homeStackNavigator()}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
