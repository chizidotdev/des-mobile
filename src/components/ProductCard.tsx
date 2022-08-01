import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "./UI/Icon";

interface CartCardProps {
  title?: string;
  desc?: string;
  price?: number;
  qty?: number;
}

export const CartCard = ({ title, desc, price, qty }: CartCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          source={require("../assets/ipad-mini.png")}
          style={styles.imgStyle}
        />
      </View>

      <View style={styles.center}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text style={styles.desc}>{desc}</Text>
        </View>
        <View style={{ marginTop: 7 }}>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <View style={{ alignSelf: "flex-end" }}>
          <Icon name="times" size={20} />
        </View>
        <View style={styles.quantity}>
          <Icon variant="transparent" name="minus" />
          <Text style={{ marginHorizontal: 10, fontSize: 16 }}>{qty}</Text>
          <Icon variant="fill" name="plus" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    height: 90,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgStyle: {
    width: 100,
    height: 200,
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
  left: { flex: 1 },
  right: { flex: 1, justifyContent: "space-between", marginVertical: 5 },
  title: { fontSize: 16, fontWeight: "700" },
  desc: { fontSize: 14 },
  price: { fontSize: 16, fontWeight: "500", color: "#FA7913" },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
  },
});
