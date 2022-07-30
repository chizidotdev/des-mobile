import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import AuthForm from "../components/AuthForm";
import LinkUI from "../components/UI/Link";
import { styles } from "../styles/signup-styles";

const SignUp = () => {
  return (
    <SafeAreaView style={styles.formContainer}>
      {/* <ScrollView> */}
      <AuthForm headerText="Sign Up" buttonText="Sign Up" />
      <View style={styles.login}>
        <Text style={styles.loginText}>Already have an account?&nbsp;</Text>
        <LinkUI style={{ textDecorationLine: "underline" }}>Sign In</LinkUI>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default SignUp;
