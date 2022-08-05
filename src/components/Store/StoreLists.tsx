import { View, ImageBackground, StyleSheet, Pressable } from "react-native";
import { Text } from "@rneui/themed";

import React from "react";
import IconUI from "../../components/UI/Icon";
import { CommonActions, useNavigation } from "@react-navigation/native";

interface ListProps {
  to?: string;
}

export const Featured = ({ to: key }: ListProps) => {
  const styles = featuredStyles;
  const navigation = useNavigation();

  const handleNavigate = (key: string) => {
    navigation.dispatch(CommonActions.navigate({ name: key }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Pressable onPress={() => key && handleNavigate(key)}>
          <ImageBackground
            source={require("../../assets/ipad-landscape.png")}
            resizeMode="cover"
            style={styles.imgStyle}
          >
            <View style={styles.top}>
              <View style={styles.bottom}>
                <Text>
                  4.5&nbsp;
                  <Text style={{ color: "#9796A1" }}>(25+)</Text>
                </Text>
              </View>
              <View>
                <IconUI name="heart" variant="fill" size={20} style={{ width: 40, height: 40 }} />
              </View>
            </View>
          </ImageBackground>
        </Pressable>
      </View>

      <View style={styles.titleContainer}>
        <Text h4 style={styles.title}>
          Ipad Pro Mini
        </Text>
        <View style={styles.descContainer}>
          <Text style={styles.desc}>Fast Delivery</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconUI name="clock" />
            <Text style={[styles.desc, { marginBottom: 10 }]}>2-3 days</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export const Popular = ({ to: key }: ListProps) => {
  const styles = featuredStyles;
  const navigation = useNavigation();
  const handleNavigate = (key: string) => {
    navigation.dispatch(CommonActions.navigate({ name: key }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Pressable onPress={() => key && handleNavigate(key)}>
          <ImageBackground
            source={require("../../assets/macbook-landscape.png")}
            resizeMode="cover"
            style={styles.imgStyle}
          >
            <View style={styles.top}>
              <View style={styles.bottom}>
                <Text>
                  4.5&nbsp;
                  <Text style={{ color: "#9796A1" }}>(25+)</Text>
                </Text>
              </View>
              <View>
                <IconUI name="heart" variant="fill" size={20} style={{ width: 40, height: 40 }} />
              </View>
            </View>
          </ImageBackground>
        </Pressable>
      </View>

      <View style={styles.titleContainer}>
        <Text h4 style={styles.title}>
          Ipad Pro Mini
        </Text>
        <View style={styles.descContainer}>
          <Text style={styles.desc}>Fast Delivery</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconUI name="clock" />
            <Text style={[styles.desc, { marginBottom: 10 }]}>2-3 days</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const featuredStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginRight: 20,
    width: 300,
    justifyContent: "space-evenly",
  },
  wrapper: {
    position: "relative",
  },
  imgStyle: {
    borderWidth: 1,
    overflow: "hidden",
    borderRadius: 20,
    width: "100%",
    height: 180,
    justifyContent: "space-between",
  },
  top: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  right: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: 5,
    marginRight: 10,
  },
  bottom: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  price: {
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  text: {
    margin: 10,
    marginHorizontal: 20,
    fontSize: 20,
  },
  titleContainer: { margin: 20 },
  title: { fontWeight: "700" },
  descContainer: {
    flexDirection: "row",
  },
  desc: { color: "#9796A1", marginTop: 10, marginRight: 20 },
});
