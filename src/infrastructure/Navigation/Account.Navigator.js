import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../../features/Account/Screens/Account.screen";
import LoginScreen from "../../features/Account/Screens/login.screen";
import RegisterScreen from "../../features/Account/Screens/Register.screen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  <Stack.Navigator>
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>;
};

export default AccountNavigator;
