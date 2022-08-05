import { View, Image, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import React from "react";
import { Text } from "@rneui/themed";
import IconUI from "../UI/Icon";

const Heading = () => {
  return (
    <View style={styles.container}>
      <View>
        <Ionicons name="menu" size={30} />
      </View>

      <View style={styles.center}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.text, { color: "#8C9099" }]}>Deliver to</Text>
          <IconUI name="caret-down" color="#8C9099" />
        </View>
        <View>
          <Text style={[styles.text, { color: "#FA7913" }]}>4102 Pretty View Lane</Text>
        </View>
      </View>

      <View style={styles.imgStyle}>
        <Image
          source={require("../../assets/macbook-landscape.png")}
          style={{ width: 50, height: 50 }}
        />
      </View>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  center: {
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  imgStyle: {
    borderRadius: 10,
    overflow: "hidden",
  },
});
