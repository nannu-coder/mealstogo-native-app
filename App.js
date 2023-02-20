import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestuarantProvider } from "./src/services/restuarants/restuarant.context";
import Navigation from "./src/infrastructure/Navigation/app.navigator";
import { FavouriteContextProvider } from "./src/services/Favourites/FavouriteContext";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouriteContextProvider>
          <RestuarantProvider>
            <Navigation />
          </RestuarantProvider>
        </FavouriteContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
