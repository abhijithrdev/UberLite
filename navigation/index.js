import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import LandingScreen from "../screens/LandingScreen";
import CartScreen from "../screens/CartScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

export default function RootNavigator() {
  const user = useSelector((state) => state.auth.user);

  return (
    <NavigationContainer>
      {user ? (
        <AppStack.Navigator>
          <AppStack.Screen name="Landing" component={LandingScreen} />
          <AppStack.Screen name="Cart" component={CartScreen} />
          <AppStack.Screen name="Notifications" component={NotificationsScreen} />
          <AppStack.Screen name="Settings" component={SettingsScreen} />
        </AppStack.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="Signup" component={SignupScreen} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}
