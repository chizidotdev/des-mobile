import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoStyle: {
    width: "80%",
    minWidth: 370,
    alignSelf: "center",
    flex: 1,
    marginTop: "20%",
  },
  body: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  start: {
    width: "85%",
    marginHorizontal: "auto",
  },
  login: {
    alignSelf: "center",
  },
  divider: {
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "7%",
  },
  dividerLine: {
    width: "80px",
    height: "1px",
    backgroundColor: "#CFCFCF",
  },
  dividerText: {
    color: "#858585",
  },
});
