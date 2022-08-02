import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ButtonUI from "../UI/Button";
import { Text as TextElement } from "@rneui/themed";
// import { FontAwesome5 } from "@expo/vector-icons";

interface OrderCardProps {
  title?: string;
  price?: number;
  qty?: number;
}

interface activeOrderCardProps extends OrderCardProps {
  status?: "active" | "completed";
}

interface completedOrderCardProps extends OrderCardProps {
  date?: string;
}

export const CompletedOrderCard = ({
  title,
  price,
  qty,
  date,
}: completedOrderCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <Image
            source={require("../../assets/ipad-mini.png")}
            style={styles.imgStyle}
          />
        </View>

        <View style={styles.center}>
          <View style={styles.dateRow}>
            <Text style={{ color: "#9796A1" }}>{"20 Jun, 10:30"}</Text>
            <Text style={{ color: "#9796A1" }}>3 Items</Text>
            <Text style={styles.price}>${"417.10"}</Text>
          </View>
          <View>
            <Text style={styles.title}>{title ? title : "Ipad Mini"}</Text>
          </View>
          <View>
            <Text style={styles.status}>
              {/* <FontAwesome5 name="circle" size={10} /> */}
              Order Delivered
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.btn}>
        <ButtonUI variant="transparent">Rate</ButtonUI>
        <ButtonUI>Re-Order</ButtonUI>
      </View>
    </View>
  );
};

export const ActiveOrderCard = ({
  title,
  status,
  price,
  qty,
}: activeOrderCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <Image
            source={require("../../assets/ipad-mini.png")}
            style={styles.imgStyle}
          />
        </View>

        <View style={[styles.center, { justifyContent: "center" }]}>
          <View style={styles.dateRow}>
            <Text style={{ color: "#9796A1" }}>3 Items</Text>
            <Text style={styles.price}>${"417.10"}</Text>
          </View>
          <View>
            <Text style={styles.title}>{title ? title : "Ipad Mini"}</Text>
          </View>
        </View>
      </View>

      <View style={styles.statusCategory}>
        <Text style={{ color: "#9796A1" }}>Estimated Arrival</Text>
        <Text style={{ color: "#9796A1" }}>Now</Text>
      </View>

      <View style={[styles.statusCategory, { marginVertical: 20 }]}>
        <TextElement h3>2 days</TextElement>
        <TextElement h4>Delivery</TextElement>
      </View>

      <View style={styles.btn}>
        <ButtonUI variant="transparent">Support</ButtonUI>
        <ButtonUI>Track Order</ButtonUI>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    justifyContent: "space-evenly",
  },
  wrapper: {
    height: 90,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgStyle: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  center: {
    flex: 2,
    marginHorizontal: 20,
    justifyContent: "space-between",
    marginVertical: 10,
  },
  left: { flex: 1, justifyContent: "center", alignItems: "center" },
  right: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: 5,
    marginRight: 10,
  },
  title: { fontSize: 16, fontWeight: "700" },
  status: { fontSize: 14, color: "#4EE476" },
  price: { fontSize: 16, fontWeight: "500", color: "#FA7913" },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateRow: {
    marginBottom: 7,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  statusCategory: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
});
