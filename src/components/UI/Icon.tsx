import { StyleSheet, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ViewStyle } from "react-native";

interface IconProps {
  name: string;
  variant?: "fill" | "transparent";
  size?: number;
  color?: string;
  textColor?: string;
  style?: ViewStyle;
}

const IconUI = ({
  name,
  variant,
  size,
  color,
  style,
  textColor,
}: IconProps) => {
  if (variant === "transparent") {
    return (
      <View
        style={[
          styles.container,
          styles.transparent,
          { borderColor: color ? color : "#FA7913" },
          style,
        ]}
      >
        <Icon
          name={name}
          color={color ? color : "#FA7913"}
          size={size ? size : 12}
        />
      </View>
    );
  }

  if (variant === "fill") {
    return (
      <View
        style={[
          styles.container,
          styles.fill,
          {
            backgroundColor: color ? color : "#FA7913",
            borderColor: color ? color : "#FA7913",
          },
          style,
        ]}
      >
        <Icon
          name={name}
          color={textColor ? textColor : "#fff"}
          size={size ? size : 12}
        />
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <Icon
        name={name}
        color={color ? color : "#FA7913"}
        size={size ? size : 16}
      />
    </View>
  );
};

export default IconUI;

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
