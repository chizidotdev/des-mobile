import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { CartCard } from "../../components/ProductCard";
import InputUI from "../../components/UI/Input";
import ButtonUI from "../../components/UI/Button";

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

  return (
    <View style={styles.container}>
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
        <InputUI
          value={promoCode}
          setValue={setPromoCode}
          placeholder="Promo Code"
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text>Subtotal</Text>
          <Text>$1397.30</Text>
        </View>
        <View style={styles.details}>
          <Text>Tax and Fees</Text>
          <Text>$5.30</Text>
        </View>
        <View style={styles.details}>
          <Text>Delivery</Text>
          <Text>$14.60</Text>
        </View>
        <View style={styles.details}>
          <Text>Total</Text>
          <Text>${cartData.reduce((acc, item) => acc + item.price, 0)}</Text>
        </View>
      </View>
      <View>
        <ButtonUI style={{ width: "80%" }}>Checkout</ButtonUI>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    marginVertical: 50,
    justifyContent: "space-evenly",
  },
  detailsContainer: {},
  details: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
