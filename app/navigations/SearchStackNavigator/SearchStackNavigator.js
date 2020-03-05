import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { searchTopTabNavigator } from '../SearchTopTabNavigator/SearchTopTabNavigator';
import { Detail } from '../screenConfigs';
import { colors } from '../../themes/colors';

const Stack = createStackNavigator();

const searchStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: colors.blackTrans },
        headerStyle: { elevation: 0 },
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS
      }}
    >
      <Stack.Screen name="Search" component={searchTopTabNavigator} options={{ title: 'Search Cards', headerStyle: { elevation: 0 } }} />
      <Stack.Screen name="Detail" component={Detail} options={({ route }) => ({ title: route.params.name })} />
    </Stack.Navigator>
  )
}

export { searchStackNavigator };
