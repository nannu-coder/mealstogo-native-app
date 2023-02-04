import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestuarentScreen from "./src/features/restuarents/screens/restuarentScreen";

export default function App() {
  return (
    <>
      <RestuarentScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
