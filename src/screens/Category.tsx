import React, { useContext, useState } from "react";

import { View, SafeAreaView, StyleSheet, Image, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Text } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";
import { FavouriteCard } from "../components/Cards/FavouriteCard";
import IconUI from "../components/UI/Icon";
import { useNavigation } from "@react-navigation/native";
import { ServiceContext } from "../context/ServiceContext";

import SelectDropdown from "react-native-select-dropdown";

const Category = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  const navigation = useNavigation();
  const { featured, popular, allServices } = useContext(ServiceContext);

  const countries = ["all", "featured", "popular"];

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <IconUI
              name="chevron-left"
              variant="fill"
              size={20}
              color="#fff"
              textColor="#000"
              style={{ width: 40, height: 40, borderRadius: 10 }}
            />
          </Pressable>
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
                {/* <SelectDropdown
                  data={countries}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                  }}
                /> */}
                <IconUI name="caret-down" />
              </View>
            </View>
            <View>
              <IconUI name="sliders-h" />
            </View>
          </View>
          <View>
            {allServices.map((service: any) => (
              <FavouriteCard
                title={service.name}
                numReviews={service.numReviews}
                price={service.price}
                rating={service.rating}
                key={service?.id}
                image={service.image}
              />
            ))}
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
