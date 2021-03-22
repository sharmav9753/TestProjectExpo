import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import TradesHeader from './TradesHeader'
import * as Colors from "../../../Constants/Colors";
import * as Fonts from "../../../Constants/Fonts";


const Trades = ({tradeData = [] }) => {
  const getBackground = (isNegative) => {
    return isNegative ? Colors.tradeGreen : Colors.tradeRed;
  };
  const getIcon = (isNegative) => {
    return isNegative ? "chevron-up" : "chevron-down";
  };
  const getIconColor = (isNegative) => {
    return isNegative ? Colors.orderGreen : "#DF5464";
  };

  const getTimeInUTC = (time) => {
    var dateTime = new Date(time);
    var formatted =
      `${dateTime.getHours()}`.padStart(2, 0) +
      ":" +
      `${dateTime.getMinutes()}`.padStart(2, 0) +
      ":" +
      `${dateTime.getSeconds()}`.padStart(2, 0);
    return formatted;
  };

  return (
    <View>
      <FlatList
        data={tradeData}
        keyExtractor={(item) => `${item.id}`}
        ListHeaderComponent={<TradesHeader tradeData={tradeData} />}
        renderItem={({ item }) => {
          const isNegative = item.amount > 0 ? false : true;
          return (
            <View
              style={[
                styles.row,
                { backgroundColor: getBackground(isNegative) },
              ]}
            >
              <View style={styles.column1}>
                <Feather
                  name={getIcon(isNegative)}
                  size={14}
                  color={getIconColor(isNegative)}
                />
                <Text style={styles.rowText}>{getTimeInUTC(item.mts)}</Text>
              </View>
              <Text style={[styles.column2, styles.rowText]}>{item.price}</Text>
              <Text style={[styles.column3, styles.rowText]}>
                {item.amount}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1C272C",
    width: "100%",
    flexDirection: "row",
    paddingVertical: Fonts.smaller,
    borderWidth: 0.5,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: Fonts.smaller,
    borderWidth: 0.5,
  },
  column1: {
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
  },
  column2: {
    flex: 3,
  },
  column3: {
    flex: 1,
    textAlign: "right",
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
  rowText: {
    color: "white",
    fontWeight: "400",
    fontSize: 12,
  },
});

export default Trades;
