import React, { useState } from "react";
import { styles } from "../../styles/reset-password-styles";

import { View, SafeAreaView, Image } from "react-native";
import { Text } from "@rneui/themed";

import InputUI from "../../components/UI/Input";
import ButtonUI from "../../components/UI/Button";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.formContainer}>
      <Image
        source={require("../../assets/des-logo-xl.png")}
        style={styles.logoStyle}
      />
      {/* <ScrollView style={styles.formContainer}> */}
      <Text h2 style={styles.heading}>
        Reset Password
      </Text>

      <Text style={styles.text}>
        Please enter your email address to request a password reset
      </Text>

      <View>
        <InputUI
          value={email}
          setValue={setEmail}
          placeholder="Enter your email"
        />
        {/* {state.errorMessage ? <Text>{state.errorMessage}</Text> : null} */}
      </View>

      <ButtonUI style={styles.button}>Send new password</ButtonUI>

      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default ResetPassword;
