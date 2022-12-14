import { View, StyleSheet, Pressable, SafeAreaView, ScrollView } from "react-native";
import { Text } from "@rneui/themed";
import React, { useState } from "react";
import { CartCard } from "../../components/Cards/CartCard";
import InputUI from "../../components/UI/Input";
import ButtonUI from "../../components/UI/Button";
import IconUI from "../../components/UI/Icon";
import { useNavigation } from "@react-navigation/native";
import { safeAreaStyles } from "../../styles/global-styles";

const cartData = [
  {
    title: "iPad Mini",
    desc: "256gb variant",
    price: 799.99,
    qty: 1,
  },
  {
    title: "iPad Pro",
    desc: "M1 variant",
    price: 1099.99,
    qty: 2,
  },
];

const CartScreen = () => {
  const [promoCode, setPromoCode] = useState("");

  const navigation = useNavigation();

  return (
    <SafeAreaView style={safeAreaStyles.AndroidSafeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.cartHeader}>
            <Pressable onPress={() => navigation.goBack()} style={styles.backIcon}>
              <IconUI
                name="chevron-left"
                variant="transparent"
                size={20}
                style={styles.backIcon}
                textColor="#000"
              />
            </Pressable>
            <Text h4>Cart</Text>
          </View>
          <View>
            {cartData.map((item, idx) => (
              <CartCard
                key={idx}
                desc={item.desc}
                price={item.price}
                title={item.title}
                qty={item.qty}
              />
            ))}
          </View>
          <View>
            <InputUI value={promoCode} setValue={setPromoCode} placeholder="Promo Code" />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.details}>
              <Text>Subtotal</Text>
              <View style={{ flexDirection: "row" }}>
                <Text>$1397.30</Text>
                <Text style={{ color: "#9796A1" }}>&nbsp;USD</Text>
              </View>
            </View>
            <View style={styles.details}>
              <Text>Tax and Fees</Text>
              <View style={{ flexDirection: "row" }}>
                <Text>$5.30</Text>
                <Text style={{ color: "#9796A1" }}>&nbsp;USD</Text>
              </View>
            </View>
            <View style={styles.details}>
              <Text>Delivery</Text>
              <View style={{ flexDirection: "row" }}>
                <Text>$14.60</Text>
                <Text style={{ color: "#9796A1" }}>&nbsp;USD</Text>
              </View>
            </View>
            <View style={styles.details}>
              <Text>Total</Text>
              <View style={{ flexDirection: "row" }}>
                <Text>${cartData.reduce((acc, item) => acc + item.price, 0)}</Text>
                <Text style={{ color: "#9796A1" }}>&nbsp;USD</Text>
              </View>
            </View>
          </View>
          <View>
            <ButtonUI style={{ width: "80%" }}>Checkout</ButtonUI>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "space-evenly",
  },
  detailsContainer: {},
  details: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartHeader: {
    alignItems: "center",
    position: "relative",
    marginBottom: 30,
  },
  backIcon: {
    position: "absolute",
    top: -3,
    left: 10,
    width: 40,
    height: 40,
    borderRadius: 10,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
});
