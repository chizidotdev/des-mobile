import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export const safeAreaStyles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
