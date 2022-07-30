import React from "react";
import { styles } from "../styles/reset-password-styles";

import { View, SafeAreaView, Image } from "react-native";
import { Text } from "@rneui/themed";
import LinkUI from "../components/UI/Link";

const EmailVerify = () => {
  return (
    <SafeAreaView style={styles.formContainer}>
      <Image
        source={require("../assets/des-logo-xl.png")}
        style={styles.logoStyle}
      />
      {/* <ScrollView style={styles.formContainer}> */}
      <Text h2 style={styles.heading}>
        Email Verification
      </Text>

      <Text style={styles.text}>
        Please enter your email address to request a password reset
      </Text>

      <View style={styles.resend}>
        <Text>Didn&apos;t receive an email?&nbsp;</Text>
        <LinkUI>Resend</LinkUI>
      </View>

      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default EmailVerify;
