import React from "react";
import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/typography";

const SettingScreen = () => {
  return (
    <SettingContainer>
      <Text variant="label">Settings Screen</Text>
    </SettingContainer>
  );
};

const SettingContainer = styled.View`
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : null};
`;

export default SettingScreen;
