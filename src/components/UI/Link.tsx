import { StyleProp, StyleSheet, Text, View } from "react-native";

interface LinkProps {
  children: React.ReactNode;
  style?: StyleProp<any>;
}

const LinkUI = ({ children, style }: LinkProps) => {
  return (
    <View>
      <Text style={[styles.linkStyle, style]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  linkStyle: {
    color: "#FA7913",
  },
});

export default LinkUI;
