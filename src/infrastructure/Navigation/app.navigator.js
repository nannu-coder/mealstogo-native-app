import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MapScreen from "../../features/restuarents/screens/MapScreen";
import RestuarantNavigator from "./Restuarent.Navigator";
import { FavouriteContextProvider } from "../../services/Favourites/FavouriteContext";
import { RestuarantProvider } from "../../services/restuarants/restuarant.context";
import SettingNavigator from "./Setting.Navigator";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
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
    <FavouriteContextProvider>
      <RestuarantProvider>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Restuarent" component={RestuarantNavigator} />
          <Tab.Screen name="Maps" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingNavigator} />
        </Tab.Navigator>
      </RestuarantProvider>
    </FavouriteContextProvider>
  );
};

export default AppNavigation;
