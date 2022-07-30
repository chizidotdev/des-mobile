import React from "react";
import { View } from "react-native";
import SignUp from "./src/screens/SignUp";
import { styles } from "./src/styles/global-styles";
// import Welcome from "./src/screens/Welcome";

const App = () => {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );
};

export default App;
