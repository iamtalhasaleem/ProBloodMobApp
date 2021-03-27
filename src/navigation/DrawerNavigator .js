import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import {DrawerScreen} from '../screens/DrawerScreen';
import {Notification} from '../screens/dashboard';
import {About} from '../screens/dashboard';
import {Records} from '../screens/dashboard';
import {Bottomtab} from './Bottomtab';

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      openByDefault={false}
      drawerContent={(props) => <DrawerScreen {...props} />}>
      <Drawer.Screen name="Bottomtab" component={Bottomtab} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="Records" component={Records} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};
