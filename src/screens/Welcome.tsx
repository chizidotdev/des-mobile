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
            <FontAwesome5 name="facebook" /> &nbsp;Facebook
          </ButtonUI>
          <ButtonUI variant="transparent">
            <FontAwesome5 name="google" /> &nbsp;Google
          </ButtonUI>
        </View>
        <ButtonUI style={styles.start}>Start with email or phone</ButtonUI>
        <Text style={styles.login}>
          Already have an account?
          <LinkUI style={{ textDecoration: "underline" }}>&nbsp;Sign In</LinkUI>
        </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

export default Welcome;
