import { Pressable, StyleProp, StyleSheet, Text } from "react-native";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "fill" | "transparent" | null;
  style?: StyleProp<any>;
}

const ButtonUI = ({ children, style, variant }: ButtonProps) => {
  return (
    <Pressable
      style={
        variant === "transparent"
          ? [styles.button, styles.transparentButton, style]
          : [styles.button, style]
      }
    >
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
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "rgba(250, 121, 19, 1)",
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.3)",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    // fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  transparentButton: {
    backgroundColor: "transparent",
  },
  transparentText: {
    color: "black",
  },
});

export default ButtonUI;
