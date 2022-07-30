import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./src/styles/global-styles";
import Welcome from "./src/screens/Welcome";

const App = () => {
  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
};

export default App;
