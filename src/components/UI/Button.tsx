import { Pressable, StyleProp, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "fill" | "transparent" | null;
  style?: StyleProp<any>;
}

const ButtonUI = ({ children, style, variant }: ButtonProps) => {
  return (
    <View
      style={
        variant === "transparent"
          ? [styles.button, styles.transparentButton, style]
          : [styles.button, style]
      }
    >
      <Pressable>
        <Text
          style={
            variant === "transparent"
              ? [styles.text, styles.transparentText]
              : [styles.text]
          }
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "#FA7913",
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.3)",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  transparentButton: {
    backgroundColor: "white",
  },
  transparentText: {
    color: "black",
  },
});

export default ButtonUI;
