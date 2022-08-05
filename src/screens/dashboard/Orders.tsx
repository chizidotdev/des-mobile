import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { CompletedOrderCard } from "../../components/Cards/OrderCard";
import { ScrollView } from "react-native-gesture-handler";

// const completedOrders = [
//   {
//     title: "iPad Mini",
//     desc: "256gb variant",
//     price: 799.99,
//     qty: 1,
//   },
//   {
//     title: "iPad Pro",
//     desc: "M1 variant",
//     price: 1099.99,
//     qty: 2,
//   },
// ];

// const activeOrders = [
//   {
//     title: "iPad Mini",
//     desc: "256gb variant",
//     price: 799.99,
//     qty: 1,
//   },
//   {
//     title: "iPad Pro",
//     desc: "M1 variant",
//     price: 1099.99,
//     qty: 2,
//   },
// ];

const Orders = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.statusContainer}>
          <View style={[styles.status, { backgroundColor: "#FA7913" }]}>
            <Text style={[styles.statusText, { color: "#fff" }]}>Active</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.statusText}>Completed</Text>
          </View>
        </View>
        <View>
          <CompletedOrderCard />
          <CompletedOrderCard />
          <CompletedOrderCard />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
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
});
