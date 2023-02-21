import React from "react";
import { Spacer } from "../../../components/Spacer/Spacer";
import { Text } from "../../../components/typography/typography";
import useAuth from "../../../Hooks/useAuth";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  ErrorContainer,
  InputField,
  Title,
} from "../Components/Acount.styles";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { onLogin, error, isLoading } = useAuth();

  return (
    // <SafeArea>
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <InputField
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(e) => setEmail(e)}
        />
        <Spacer size="large" />
        <InputField
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(e) => setPassword(e)}
        />

        <Spacer size="large" />

        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}

        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={MD2Colors.blue300} />
        )}
      </AccountContainer>

      <Spacer size="large" />

      <AuthButton
        icon="keyboard-backspace"
        mode="contained"
        onPress={() => navigation.goBack()}
      >
        Go Back
      </AuthButton>
    </AccountBackground>
    // </SafeArea>
  );
};

export default LoginScreen;
