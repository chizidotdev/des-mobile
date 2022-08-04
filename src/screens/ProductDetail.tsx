import React from "react";
import { View, ImageBackground, StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";
import { Text } from "@rneui/themed";
import IconUI from "../components/UI/Icon";
import ButtonUI from "../components/UI/Button";

const AddOnItem = () => {
  return (
    <View style={styles.addOn}>
      <View style={styles.flexRow}>
        <Image
          source={require("../assets/macbook-landscape.png")}
          style={{ width: 40, height: 40, borderRadius: 50, marginRight: 10 }}
        />
        <Text style={{ fontSize: 18 }}>Final Cut Pro</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={{ fontSize: 18, marginRight: 7 }}>+ $2.30</Text>
        <IconUI name="circle" size={20} />
      </View>
    </View>
  );
};

const ProductDetail = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>
          <ImageBackground
            source={require("../assets/macbook-landscape.png")}
            resizeMode="cover"
            style={styles.imgStyle}
          >
            <View style={styles.top}>
              <View style={styles.price}>
                <IconUI
                  name="chevron-left"
                  variant="fill"
                  size={20}
                  color="#fff"
                  textColor="#000"
                  style={{ width: 40, height: 40, borderRadius: 10 }}
                />
              </View>
              <View>
                <IconUI name="heart" variant="fill" size={20} style={{ width: 40, height: 40 }} />
              </View>
            </View>
          </ImageBackground>

          <View style={styles.titleContainer}>
            <Text h3 style={styles.title}>
              Macbook Air
            </Text>
            <View style={styles.reviewContainer}>
              <IconUI name="star" />
              <Text>4.5</Text>
              <Text style={{ color: "#9796A1" }}>&nbsp;(30+)&nbsp;&nbsp;</Text>
              <ButtonUI type="link" style={{ textDecorationLine: "underline" }}>
                See Review
              </ButtonUI>
            </View>
            <View style={styles.price}>
              <View>
                <Text h3 style={{ color: "#FA7913" }}>
                  $9.50
                </Text>
              </View>
              <View style={styles.flexRow}>
                <IconUI variant="transparent" name="minus" />
                <Text style={{ marginHorizontal: 10, fontSize: 16 }}>02</Text>
                <IconUI variant="fill" name="plus" />
              </View>
            </View>
          </View>

          <View style={styles.descContainer}>
            <Text style={styles.desc}>
              Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use
              fresh chopped. Spices – chili powder, cumin, onion powder.
            </Text>
          </View>
        </View>

        <View style={styles.addOnContainer}>
          <Text h4>Choice of Add On</Text>
          <View>
            <AddOnItem />
            <AddOnItem />
            <AddOnItem />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 40,
    // justifyContent: "space-evenly",
  },
  wrapper: {
    position: "relative",
  },
  imgStyle: {
    borderWidth: 1,
    overflow: "hidden",
    borderRadius: 20,
    width: "100%",
    height: 230,
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
  price: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleContainer: { marginTop: 20 },
  title: {},
  descContainer: {},
  desc: { color: "#9796A1", fontSize: 18, lineHeight: 30 },
  addOnContainer: {
    marginVertical: 20,
    justifyContent: "space-between",
  },
  addOn: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
