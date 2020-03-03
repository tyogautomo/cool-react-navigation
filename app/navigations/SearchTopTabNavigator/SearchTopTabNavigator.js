import React from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { SearchByTypes, SearchBySubtypes } from '../screenConfigs';

const TopTab = createMaterialTopTabNavigator();

const searchTopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="SearchByTypes" component={SearchByTypes} />
      <TopTab.Screen name="SearchBySubtypes" component={SearchBySubtypes} />
    </TopTab.Navigator>
  )
}

export { searchTopTabNavigator };
