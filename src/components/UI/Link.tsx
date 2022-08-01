import { StyleProp, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

interface LinkProps {
  children: React.ReactNode;
  style?: StyleProp<any>;
  to?: string;
  navigation?: any;
}

const LinkUI = ({ children, style, to, navigation }: LinkProps) => {
  return (
    <TouchableOpacity onPress={() => to && navigation?.navigate(to)}>
      <View>
        <Text style={[styles.linkStyle, style]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkStyle: {
    color: "#FA7913",
  },
});

export default withNavigation(LinkUI);
