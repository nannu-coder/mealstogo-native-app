import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MapScreen from "../../features/restuarents/screens/MapScreen";
import SettingScreen from "../../features/restuarents/screens/SettingScreen";
import RestuarantNavigator from "./Restuarent.Navigator";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const TAB_ICON = {
    Restuarent: "md-restaurant",
    Maps: "md-map",
    Settings: "md-settings",
  };

  const screenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ color, size }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
      headerShown: false,
    };
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Restuarent" component={RestuarantNavigator} />
        <Tab.Screen name="Maps" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
