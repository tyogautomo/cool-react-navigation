import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../navigations/screenConfigs'

const Stack = createStackNavigator();

const homeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export { homeStackNavigator };
