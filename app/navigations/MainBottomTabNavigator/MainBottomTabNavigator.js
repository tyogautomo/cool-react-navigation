import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { homeStackNavigator } from '../HomeStackNavigator/HomeStackNavigator';
import { searchStackNavigator } from '../SearchStackNavigator/SearchStackNavigator'

const TabBottom = createMaterialBottomTabNavigator();

const mainBottomTabNavigator = () => {
  return (
    <TabBottom.Navigator
      barStyle={{ backgroundColor: '#0d0d0d' }}
    >
      <TabBottom.Screen name="HomeMain" component={homeStackNavigator} options={{ title: 'Home' }} />
      <TabBottom.Screen name="SearchMain" component={searchStackNavigator} options={{ title: 'Search' }} />
    </TabBottom.Navigator>
  )
}

export { mainBottomTabNavigator };
