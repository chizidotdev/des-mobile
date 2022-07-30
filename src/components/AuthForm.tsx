import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Text } from "react-native-elements";
import ButtonUI from "./UI/Button";

interface AuthFormProps {
  headerText: string;
  buttonText: string;
  onSubmit?: (email: string, password: string) => void;
  errorMessage?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  headerText,
  buttonText,
  onSubmit,
  errorMessage,
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.formContainer}>
      <Text h3>{headerText}</Text>
      <Input
        label="Full Name"
        value={name}
        onChangeText={(text) => setName(text)}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
      />
      <Input
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
      />
      <Input
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
      />
      {/* {state.errorMessage ? <Text>{state.errorMessage}</Text> : null} */}
      <ButtonUI style={{ width: "80%" }}>{buttonText}</ButtonUI>
    </View>
  );
};

export default AuthForm;

export const styles = StyleSheet.create({
  formContainer: {
    // height: "100%",
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "space-evenly",
  },
});
