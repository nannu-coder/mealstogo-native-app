import React from "react";
import { Button, Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/typography";
import useAuth from "../../../Hooks/useAuth";
import { Avatar, List, MD3Colors } from "react-native-paper";
import { SafeArea } from "../../../components/utility/SafeArea";
import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../../components/Spacer/Spacer";

const SettingScreen = ({ navigation }) => {
  const { onLogout, user } = useAuth();

  const TransparentSafeArea = styled(SafeArea)`
    background-color: transparent;
  `;
  const SettingsBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/home-bg.jpg"),
  })`
    position: absolute;
    height: 100%;
    width: 100%;
  `;

  const SettingsItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]};
    background-color: rgba(255, 255, 255, 0.4);
  `;
  const AvatarContainer = styled.View`
    align-items: center;
  `;

  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <Avatar.Icon
            size={180}
            icon="human"
            backgroundColor={colors.brand.primary}
          />
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>

        <List.Section>
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.error} icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <Spacer />
          <SettingsItem
            title="Payment"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.secondary} icon="cart" />
            )}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            title="Past Orders"
            left={(props) => (
              <List.Icon
                {...props}
                color={colors.ui.secondary}
                icon="history"
              />
            )}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            title="Logout"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.secondary} icon="door" />
            )}
            onPress={onLogout}
          />
        </List.Section>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};

const SettingContainer = styled.View`
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : null};
`;

export default SettingScreen;
