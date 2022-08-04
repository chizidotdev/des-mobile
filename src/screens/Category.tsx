import React from "react";

import { View, SafeAreaView, StyleSheet, Image } from "react-native";
import { Text } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";
import { FavouriteCard } from "../components/Cards/FavouriteCard";
import IconUI from "../components/UI/Icon";

const Category = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <IconUI
              name="chevron-left"
              variant="fill"
              size={20}
              color="#fff"
              textColor="#000"
              style={{ width: 40, height: 40, borderRadius: 10 }}
            />
          </View>
          <View style={styles.headerTitle}>
            <Text h1>Ipad</Text>
            <Text h1 style={{ color: "#FA7913" }}>
              Mini
            </Text>
            <Text style={{ color: "#9796A1" }}>New Mini 2021</Text>
          </View>
          <View style={styles.headerImg}>
            <Image
              source={require("../assets/macbook-landscape.png")}
              style={{ width: 250, height: 200 }}
            />
          </View>
        </View>

        <View>
          <View style={styles.sortContainer}>
            <View style={styles.rowFlex}>
              <Text h4>Sort by:</Text>
              <View style={styles.rowFlex}>
                <Text h4 style={{ color: "#FA7913" }}>
                  &nbsp;&nbsp;Popular
                </Text>
                <IconUI name="caret-down" />
              </View>
            </View>
            <View>
              <IconUI name="sliders-h" />
            </View>
          </View>
          <View>
            <FavouriteCard />
            <FavouriteCard />
            <FavouriteCard />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 40,
  },
  headerContainer: {
    justifyContent: "space-between",
  },
  headerTitle: {
    marginVertical: 50,
  },
  headerImg: { position: "absolute", top: -50, right: -50 },
  statusText: {
    margin: 15,
    color: "#FA7913",
    // fontSize: 16,
  },
  sortContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
});
