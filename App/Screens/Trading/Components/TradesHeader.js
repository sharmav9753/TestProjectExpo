import React from "react";
import {View,Text, StyleSheet} from "react-native";
import * as Colors from "../../../Constants/Colors";
import * as Fonts from "../../../Constants/Fonts";


const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1C272C",
    width: "100%",
    flexDirection: "row",
    paddingVertical: Fonts.smaller,
    borderWidth: 0.5,
  },
  headerText: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
  },
  timeText: {
    paddingLeft: 16,
    fontWeight: "700",
    fontSize: 12,
  },
  timeView: {
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
  },
  priceText: {
    flex: 3,
  },
  amountText: {
    flex: 1,
    textAlign: "right",
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

const TradesHeader = ({tradeData = []}) => {
  return tradeData.length ? (  
    <View style={styles.header}>
      <View style={styles.timeView}>
        <Text style={[styles.headerText, styles.timeText]}>TIME</Text>
      </View>
      <Text style={[styles.priceText, styles.headerText]}>PRICE</Text>
      <Text style={[styles.amountText, styles.headerText]}>AMOUNT</Text>
    </View>
  ) : (
    <View style={styles.dataNotFoundContainer}>
      <Text style={styles.dataNotFound}>No data found</Text>
    </View>
  );
}

export default TradesHeader