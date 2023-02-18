import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestuarentScreen from "../../features/restuarents/screens/RestuarentScreen";
import RestuarentDetails from "../../features/restuarents/Components/RestuarentDetails";
import { TransitionPresets } from "@react-navigation/stack";

const Stack = createNativeStackNavigator();

const RestuarantNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Stack.Screen name="Restuarant" component={RestuarentScreen} />
      <Stack.Screen name="RestuarentDetail" component={RestuarentDetails} />
    </Stack.Navigator>
  );
};

export default RestuarantNavigator;
