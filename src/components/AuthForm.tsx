import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Input, Text, Button } from "react-native-elements";

interface AuthFormProps {
  headerText: string;
  buttonText: string;
  onSubmit: (email: string, password: string) => void;
  errorMessage?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  headerText,
  buttonText,
  onSubmit,
  errorMessage,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Text h3>AuthForm</Text>
      <Input
        label="Email"
        value="email"
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
      />
      <Input
        label="Password"
        value="password"
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
      />
      {/* {state.errorMessage ? <Text>{state.errorMessage}</Text> : null} */}
      <Button title={buttonText} onPress={() => {}} />
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({});
