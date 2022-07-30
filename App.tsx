import { styles } from "./src/styles/global-styles";
import React from "react";

import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// import SignUp from "./src/screens/SignUp";
// import SignIn from "./src/screens/SignIn";
// import ResetPassword from "./src/screens/ResetPassword";
// import EmailVerify from "./src/screens/EmailVerify";
import Welcome from "./src/screens/Welcome";

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <EmailVerify /> */}
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        {/* <ResetPassword /> */}
        <Welcome />
      </View>
    </SafeAreaProvider>
  );
};

export default App;
