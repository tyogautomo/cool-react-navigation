import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { SearchByTypes, SearchBySubtypes } from '../screenConfigs';

const TopTab = createMaterialTopTabNavigator();

const searchTopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="SearchByTypes" component={SearchByTypes} options={{ title: 'By Types' }} />
      <TopTab.Screen name="SearchBySubtypes" component={SearchBySubtypes} options={{ title: 'By Subtypes' }} />
    </TopTab.Navigator>
  )
}

export { searchTopTabNavigator };
