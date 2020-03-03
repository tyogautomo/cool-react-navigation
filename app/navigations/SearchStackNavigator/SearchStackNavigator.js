import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { searchTopTabNavigator } from '../SearchTopTabNavigator/SearchTopTabNavigator';

const Stack = createStackNavigator();

const searchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={searchTopTabNavigator} options={{ title: 'Search Cards', headerStyle: { elevation: 0 } }} />
    </Stack.Navigator>
  )
}

export { searchStackNavigator };
