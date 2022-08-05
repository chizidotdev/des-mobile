import { View, Image, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import React from "react";
import { Text } from "@rneui/themed";
import IconUI from "../UI/Icon";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const Heading = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}> */}
      <Pressable>
        <TouchableOpacity>
          <Ionicons name="menu" size={30} />
        </TouchableOpacity>
      </Pressable>

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
