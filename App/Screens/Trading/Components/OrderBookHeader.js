import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Colors from "../../../Constants/Colors";
import * as Fonts from "../../../Constants/Fonts";

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: Fonts.large,
    flexDirection: "row",
    backgroundColor: Colors.baseBackground,
    paddingVertical: Fonts.smaller,
  },
  text: {
    fontSize: Fonts.small,
    color: Colors.white,
    alignSelf: "center",
  },
  subContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Fonts.smaller,
  },
  dataNotFoundContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },
  dataNotFound: {
    color: Colors.white,
  },
});

const OrderBookHeader = ({shouldShowHeader}) => {
  return (
    shouldShowHeader ?
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.text}>TOTAL</Text>
          <Text style={styles.text}>PRICE</Text>
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.text}>PRICE</Text>
          <Text style={styles.text}>TOTAL</Text>
        </View>
      </View>
    : (
      <View style={styles.dataNotFoundContainer}>
        <Text style={styles.dataNotFound}>No data found</Text>
      </View>
    )
  );
};

export default OrderBookHeader;
