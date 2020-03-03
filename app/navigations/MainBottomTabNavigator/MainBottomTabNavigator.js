import React from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

import { homeStackNavigator } from '../HomeStackNavigator/HomeStackNavigator';
import { searchStackNavigator } from '../SearchStackNavigator/SearchStackNavigator';
import { profileDrawerNavigator } from '../ProfileDrawerNavigator/ProfileDrawerNavigator';
import { colors } from '../../themes/colors';

const TabBottom = createMaterialBottomTabNavigator();

const mainBottomTabNavigator = () => {
  return (
    <TabBottom.Navigator
      barStyle={{ backgroundColor: 'white' }}
      inactiveColor="white"
      activeColor="white"
      labeled={false}
    >
      <TabBottom.Screen
        name="HomeMain"
        component={homeStackNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <IconAwesome name="optin-monster" color={focused ? colors.red : colors.myGrey} size={20} />
        }} />
      <TabBottom.Screen
        name="SearchMain"
        component={searchStackNavigator}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <View>
              <IconAwesome name="search" color={focused ? colors.red : colors.myGrey} size={20} />
            </View>
          )
        }}
      />
      <TabBottom.Screen
        name="ProfileMain"
        component={profileDrawerNavigator}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <IconAwesome name="user" color={focused ? colors.red : colors.myGrey} size={20} />
        }}
      />
    </TabBottom.Navigator>
  )
}

export { mainBottomTabNavigator };
