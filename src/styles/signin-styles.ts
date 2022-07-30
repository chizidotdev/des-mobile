import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  formContainer: {
    height: "100%",
    width: "90%",
    // backgroundColor: "#fff",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  heading: {
    marginTop: 40,
    fontWeight: "bold",
  },
  login: {
    alignSelf: "center",
    flexDirection: "row",
  },
  loginText: {},
  divider: {
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dividerLine: {
    width: 80,
    height: 1,
    backgroundColor: "#CFCFCF",
    marginHorizontal: 20,
  },
  dividerText: {
    color: "#858585",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
});
