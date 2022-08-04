import { Pressable, StyleProp, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";
import { CommonActions, useNavigation } from "@react-navigation/native";

interface ButtonProps {
  children: ReactNode;
  variant?: "fill" | "transparent" | null;
  style?: StyleProp<any>;
  type?: "link" | "button";
  to?: string;
}

const ButtonUI = ({ children, style, variant, type, to: key }: ButtonProps) => {
  const navigation = useNavigation();

  const handleNavigate = (key: string) => {
    navigation.dispatch(CommonActions.navigate({ name: key }));
  };

  if (type === "link") {
    return (
      <TouchableOpacity onPress={() => key && handleNavigate(key)}>
        <View>
          <Text style={[styles.linkStyle, style]}>{children}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={
        variant === "transparent"
          ? [styles.button, styles.transparentButton, style]
          : [styles.button, style]
      }
    >
      <Pressable onPress={() => key && key && handleNavigate(key)}>
        <Text
          style={variant === "transparent" ? [styles.text, styles.transparentText] : [styles.text]}
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
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 5,
  },
  text: {
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
  linkStyle: {
    color: "#FA7913",
  },
});

export default ButtonUI;
// export default withNavigation(ButtonUI);
