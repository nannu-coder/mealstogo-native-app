import React from "react";
import { StatusBar, Platform } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/typography";

const MapScreen = () => {
  return (
    <MapContainer>
      <Text variant="label">Map Screen</Text>
    </MapContainer>
  );
};

const MapContainer = styled.View`
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : null};
`;

export default MapScreen;
