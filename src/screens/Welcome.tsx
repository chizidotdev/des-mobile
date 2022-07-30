import { Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import ButtonUI from "../components/UI/Button";
import { FontAwesome5 } from "@expo/vector-icons";

import { styles } from "../styles/welcome-styles";
import LinkUI from "../components/UI/Link";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/des-logo-xl.png")}
        style={styles.logoStyle}
      />
      <View style={styles.body}>
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
        <ButtonUI style={styles.start}>Start with email or phone</ButtonUI>
        <View style={styles.login}>
          <Text style={styles.loginText}>Already have an account?&nbsp;</Text>
          <LinkUI style={{ textDecorationLine: "underline" }}>Sign In</LinkUI>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

export default Welcome;
