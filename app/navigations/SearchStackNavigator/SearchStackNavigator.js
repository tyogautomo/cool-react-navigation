import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { Search } from '../screenConfigs';

const Stack = createStackNavigator();

const searchStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  )
}

export { searchStackNavigator };
