import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import {
  ActiveOrderCard,
  CompletedOrderCard,
} from "../../components/Cards/OrderCard";

const completedOrders = [
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

const activeOrders = [
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

const Orders = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.status}>
        <Text>Active</Text>
        <Text>Completed</Text>
      </View>
      <View>
        <ActiveOrderCard />
        <ActiveOrderCard />
        <ActiveOrderCard />
      </View>
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    flex: 1,
  },
  status: {
    flexDirection: "row",
  },
});
