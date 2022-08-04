import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Text } from "@rneui/themed";
import IconUI from "../UI/Icon";

interface FavouritesCardProps {
  title?: string;
  price?: number;
  qty?: number;
}

export const FavouriteCard = ({ title, price, qty }: FavouritesCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ImageBackground
          source={require("../../assets/ipad-landscape.png")}
          resizeMode="cover"
          style={styles.imgStyle}
        >
          <View style={styles.top}>
            <View style={styles.price}>
              <Text style={styles.text}>$510.5</Text>
            </View>
            <View>
              <IconUI
                name="heart"
                variant="fill"
                size={20}
                style={{ width: 40, height: 40 }}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.bottom}>
          <Text>
            4.5&nbsp;
            {/* <IconUI name="star" size={8} style={{ width: 10, height: 10 }} /> */}
            <Text style={{ color: "#9796A1" }}>(25+)</Text>
          </Text>
        </View>
      </View>

      <View style={styles.titleContainer}>
        <Text h4 style={styles.title}>
          Ipad Pro Mini
        </Text>
        <Text style={styles.desc}>Newer Variant</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
    position: "absolute",
    bottom: -10,
    left: 20,
    width: 90,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 30,
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.3)",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 5,
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
  desc: { color: "#9796A1", marginTop: 10 },
});
