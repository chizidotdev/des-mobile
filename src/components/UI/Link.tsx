import { StyleProp, StyleSheet, TouchableOpacity } from "react-native";

interface LinkProps {
  children: React.ReactNode;
  style?: StyleProp<any>;
}

const LinkUI = ({ children, style }: LinkProps) => {
  return (
    <TouchableOpacity style={[styles.linkStyle, style]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkStyle: {
    color: "#FA7913",
  },
});

export default LinkUI;
