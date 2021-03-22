import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import OrderBookHeader from "./OrderBookHeader";
import * as Colors from "../../../Constants/Colors";
import * as Fonts from "../../../Constants/Fonts";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.baseBackground,
    borderWidth: 0.5,
  },
  leftContent: {
    paddingLeft: Fonts.xLargest,
  },
  rightContent: {
    paddingRight: Fonts.xLargest,
  },
  text: {
    paddingHorizontal: Fonts.smaller,
    fontSize: Fonts.small,
    color: Colors.white,
    alignSelf: "center",
    paddingVertical: Fonts.smaller,
  },
  subContainerLeft: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  subContainerRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  pointBarLight: {
    backgroundColor: Colors.backgroundRed,
    marginTop: 4,
    height: 10,
    flex: 1,
    borderRadius: 3,
  },
  rightProgressBar: {
    position: "absolute",
    left: 0,
    height: "100%",
    backgroundColor: Colors.backgroundRed,
  },
  leftProgressBar: {
    position: "absolute",
    left: 0,
    height: "100%",
    backgroundColor: Colors.backgroundGreen,
  },
});

const getPointBarPercentage = (userPointsTowardReward, pointsRequired) =>
  `${
    ((userPointsTowardReward > pointsRequired
      ? pointsRequired
      : userPointsTowardReward) *
      100) /
    pointsRequired
  }%`;

const OrderBook = ({orderData = []}) => {
  return (
    <FlatList
      data={orderData}
      keyExtractor={(item) => `${item.ID}`}
      ListHeaderComponent={<OrderBookHeader shouldShowHeader={orderData.length} />}
      renderItem={({ item }) => {
        return (
          <View style={styles.mainContainer}>
            <View style={styles.subContainerLeft}>
              <View
                style={[
                  styles.leftProgressBar,
                  {
                    width: getPointBarPercentage(50, 100),
                  },
                ]}
              />
              <Text style={styles.text}>0.0362000</Text>
              <Text style={[styles.text, styles.leftContent]}>1,091</Text>
            </View>

            <View style={styles.subContainerRight}>
              <View
                style={[
                  styles.rightProgressBar,
                  {
                    width: getPointBarPercentage(40, 100),
                  },
                ]}
              />
              <Text style={styles.text}>0.0362000</Text>
              <Text style={[styles.text, styles.rightContent]}>80,993</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

export default OrderBook;
