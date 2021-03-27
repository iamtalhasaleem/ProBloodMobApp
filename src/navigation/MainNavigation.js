import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { Welcome } from "../screens/login";
import { Creditiential } from "../screens/login";

import { EditProfile } from "../screens/dashboard";

import { Bottomtab } from "./Bottomtab";
import { Bottomtab2 } from "./Bottomtab2";
import { DrawerNavigator } from "./DrawerNavigator ";

export class MainNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Creditiential"
            component={Creditiential}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bottomtab2"
            component={Bottomtab2}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Bottomtab"
            component={Bottomtab}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
