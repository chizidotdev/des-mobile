import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Heading from "../../components/Store/Heading";
import { Text } from "@rneui/themed";
import InputUI from "../../components/UI/Input";
import IconUI from "../../components/UI/Icon";
import { ProductStackParamList } from "../../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Featured, Popular } from "../../components/Store/StoreLists";
import ButtonUI from "../../components/UI/Button";

type StoreScreenProps = NativeStackScreenProps<ProductStackParamList, "Store">;

const Store = ({ navigation }: StoreScreenProps) => {
  const [value, setValue] = useState("");

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Heading />

          <View style={styles.header}>
            <Text h3>What would you like to order</Text>

            <View style={styles.search}>
              <View style={styles.searchIcon}>
                <IconUI name="search" size={20} />
              </View>
              <InputUI
                value={value}
                setValue={setValue}
                placeholder="Search services"
                style={{ flex: 1 }}
                inputStyle={{ paddingLeft: 50 }}
              />
              <View style={{ marginLeft: 15, marginTop: 10 }}>
                <IconUI name="sliders-h" size={20} />
              </View>
            </View>
          </View>

          <View style={styles.featuredContainer}>
            <View style={styles.featuredHeader}>
              <Text h4>Featured Services</Text>
              <View>
                <ButtonUI type="link">View All</ButtonUI>
              </View>
            </View>

            <ScrollView horizontal style={styles.featured}>
              <Featured to="Details" />
              <Featured />
              <Featured />
            </ScrollView>
          </View>

          <View style={styles.featuredContainer}>
            <View style={styles.featuredHeader}>
              <Text h4>Popular Services</Text>
              <View>
                <ButtonUI type="link">View All</ButtonUI>
              </View>
            </View>

            <ScrollView horizontal style={styles.featured}>
              <Popular to="Details" />
              <Popular />
              <Popular />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Store;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    marginTop: 30,
    fontWeight: "bold",
  },
  search: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    zIndex: 5,
    position: "absolute",
    top: 40,
    left: 10,
  },
  featuredContainer: {
    width: "100%",
    marginTop: 30,
  },
  featuredHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  featured: {
    width: "100%",
  },
});
