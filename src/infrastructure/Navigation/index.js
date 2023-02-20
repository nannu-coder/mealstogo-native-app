import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import AccountNavigator from "./Account.Navigator";
import AppNavigation from "./app.navigator";

const Navigation = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
