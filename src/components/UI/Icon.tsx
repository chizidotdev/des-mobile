import { StyleSheet, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

interface IconProps {
  name: string;
  variant?: "fill" | "transparent";
  size?: number;
}

const Icon = ({ name, variant, size }: IconProps) => {
  if (variant === "transparent") {
    return (
      <View
        style={[
          styles.container,
          { borderWidth: 1, borderColor: "#FA7913", borderRadius: 100 },
        ]}
      >
        <FontAwesome5 name={name} color="#FA7913" size={size ? size : 12} />
      </View>
    );
  }

  if (variant === "fill") {
    return (
      <View style={[styles.container, styles.fill]}>
        <FontAwesome5 name={name} color="#fff" size={size ? size : 12} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FontAwesome5 name={name} color="#FA7913" size={size ? size : 16} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  fill: {
    borderWidth: 1,
    borderColor: "#FA7913",
    borderRadius: 100,
    backgroundColor: "#FA7913",
  },
});
