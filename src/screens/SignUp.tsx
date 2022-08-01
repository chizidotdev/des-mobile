import { styles } from "../styles/signup-styles";
import { FontAwesome5 } from "@expo/vector-icons";

import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { Text } from "@rneui/themed";

import InputUI from "../components/UI/Input";
import ButtonUI from "../components/UI/Button";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.formContainer}>
      {/* <ScrollView style={styles.formContainer}> */}
      <Text h2 style={styles.heading}>
        Sign Up
      </Text>
      <View>
        <InputUI
          label="Full name"
          value={name}
          setValue={setName}
          placeholder="Enter your name"
        />
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
        />
        {/* {state.errorMessage ? <Text>{state.errorMessage}</Text> : null} */}
      </View>
      <ButtonUI style={{ width: "80%" }}>Sign Up</ButtonUI>

      <View style={styles.login}>
        <Text style={styles.loginText}>Already have an account?&nbsp;</Text>
        <ButtonUI type="link" to="SignIn">
          Login
        </ButtonUI>
      </View>

      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>sign up with </Text>
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

export default SignUp;
