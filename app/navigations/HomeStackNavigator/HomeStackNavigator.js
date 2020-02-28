import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { Home, Detail } from '../../navigations/screenConfigs';
import { colors } from '../../themes/colors';

const Stack = createStackNavigator();

const homeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: colors.whiteTrans },
        headerStyle: { elevation: 0 },
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={Detail} options={({ route }) => ({ title: route.params.name })} />
    </Stack.Navigator>
  );
};

export { homeStackNavigator };
