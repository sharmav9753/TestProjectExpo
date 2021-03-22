import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Colors from "../../../Constants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.itemBackground,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  infoContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  rightView: {
    alignItems: "flex-end",
  },
  text: {
    color: Colors.lightGray,
  },
  profitText: {
    color: Colors.orderGreen,
  },
  lossText: {
    color: Colors.tradeRed,
  },
});

const getPLPercentageText = (plPercentage) => {
  const text = `${Math.abs(plPercentage * 100)} %`;
  if (plPercentage < 0) {
    return <Text style={[styles.text, styles.lossText]}>{text}</Text>;
  } else {
   return <Text style={[styles.text, styles.profitText]}>{text}</Text>;
  }
};

const TickerView = ({ name, vol, high, low, price, plPercentage, icon }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons style={styles.text} name={icon} size={50} />
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>
            <Text style={styles.text}>VOL: </Text>
            {vol}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.text}>LOW: </Text>
            {low}
          </Text>
        </View>
        <View style={styles.rightView}>
          <Text style={styles.text}>{price}</Text>
          { getPLPercentageText(plPercentage)}
          <Text style={styles.text}>
            <Text style={styles.text}>HIGH: </Text>
            {high}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TickerView;
