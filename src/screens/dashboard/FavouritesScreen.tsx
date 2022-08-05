import React, { useContext } from "react";

import { View, SafeAreaView, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";
import { FavouriteCard } from "../../components/Cards/FavouriteCard";
import IconUI from "../../components/UI/Icon";
import { ServiceContext } from "../../context/ServiceContext";

const Favourites = () => {
  const { popular } = useContext(ServiceContext);

  const service = popular[0];

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.statusContainer}>
          <View style={[styles.status, { backgroundColor: "#FA7913" }]}>
            <Text style={[styles.statusText, { color: "#fff" }]}>Ipads</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.statusText}>Laptops</Text>
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
            <FavouriteCard
              title={service.name}
              numReviews={service.numReviews}
              price={service.price}
              rating={service.rating}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#F2EAEA",
  },
  status: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
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
