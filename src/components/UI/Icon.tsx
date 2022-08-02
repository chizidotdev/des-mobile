import { StyleSheet, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

interface IconProps {
  name: string;
  variant?: "fill" | "transparent";
  size?: number;
  color?: string;
}

const Icon = ({ name, variant, size, color }: IconProps) => {
  if (variant === "transparent") {
    return (
      <View
        style={[styles.container, styles.transparent, { borderColor: color }]}
      >
        <FontAwesome5
          name={name}
          color={color ? color : "#FA7913"}
          size={size ? size : 12}
        />
      </View>
    );
  }

  if (variant === "fill") {
    return (
      <View style={[styles.container, styles.fill, { backgroundColor: color }]}>
        <FontAwesome5 name={name} color="#fff" size={size ? size : 12} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FontAwesome5
        name={name}
        color={color ? color : "#FA7913"}
        size={size ? size : 16}
      />
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

    borderRadius: 100,
  },
  transparent: { borderWidth: 1, borderRadius: 100 },
});
