import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

// Screens
import {GHome} from '../screens/guest';
import {GMap} from '../screens/guest';
import {GRequest} from '../screens/guest';

export function Bottomtab2() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Home"
        component={GHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Request"
        component={GRequest}
        options={{
          tabBarLabel: 'Request',
          tabBarIcon: ({color}) => (
            <Entypo name="drop" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="GMap"
        component={GMap}
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
    </Tab.Navigator>
  );
}
