import React from "react";
import {
  createNativeStackNavigator,
  //   CardStyleInterpolators,
} from "@react-navigation/native-stack";
import SettingScreen from "../../features/restuarents/screens/SettingScreen";
import FavouriteScreen from "../../features/Settings/Settings.Favourites";

const Stack = createNativeStackNavigator();

const SettingNavigator = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="Favourites" component={FavouriteScreen} />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
