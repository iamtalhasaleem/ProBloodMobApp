import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

// Screens
import {Home} from '../screens/dashboard';
import {Request} from '../screens/dashboard';
import {Map} from '../screens/dashboard';
import {Profile} from '../screens/dashboard';

export function Bottomtab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Request"
        component={Request}
        options={{
          tabBarLabel: 'Request',
          tabBarIcon: ({color}) => (
            <Entypo name="drop" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="map-marker-radius"
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
