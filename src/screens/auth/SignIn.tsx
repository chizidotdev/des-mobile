import { styles } from "../../styles/signin-styles";
import { FontAwesome5 } from "@expo/vector-icons";

import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { Text } from "@rneui/themed";

import InputUI from "../../components/UI/Input";
import ButtonUI from "../../components/UI/Button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.formContainer}>
      {/* <ScrollView style={styles.formContainer}> */}
      <Text h2 style={styles.heading}>
        Login
      </Text>
      <View>
        <InputUI
          label="E-mail"
          value={email}
          setValue={setEmail}
          placeholder="Enter your email"
        />
        <InputUI
          label="Password"
          value={password}
          setValue={setPassword}
          placeholder="Enter a password"
          secure
        />
        {/* {state.errorMessage ? <Text>{state.errorMessage}</Text> : null} */}
      </View>

      <View style={styles.login}>
        <ButtonUI to="ResetPassword" type="link">
          Forgot password?
        </ButtonUI>
      </View>

      <ButtonUI style={{ width: "80%" }}>Login</ButtonUI>

      <View style={styles.login}>
        <Text style={styles.loginText}>Don&apos;t have an account?&nbsp;</Text>
        <ButtonUI type="link" to="SignUp">
          Sign Up
        </ButtonUI>
      </View>

      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>sign in with </Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.buttons}>
        <ButtonUI variant="transparent">
          <FontAwesome5 name="facebook" />
          <Text>&nbsp;Facebook</Text>
        </ButtonUI>
        <ButtonUI variant="transparent">
          <FontAwesome5 name="google" />
          <Text>&nbsp;Google</Text>
        </ButtonUI>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default SignIn;
