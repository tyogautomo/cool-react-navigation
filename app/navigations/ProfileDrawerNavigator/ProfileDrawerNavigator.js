import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Profile, Favorite } from '../screenConfigs';
import { DrawerCustomContent } from './DrawerCustomContent.module.';

const Drawer = createDrawerNavigator();

const profileDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerCustomContent {...props} />}
    >
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Favorite" component={Favorite} />
    </Drawer.Navigator>
  )
};

export { profileDrawerNavigator };
