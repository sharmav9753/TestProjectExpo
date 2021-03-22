import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Colors from "../../../Constants/Colors";

const Accordion = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => setExpanded(!expanded)}
      >
        <Ionicons
          name={expanded ? "chevron-down-outline" : "chevron-forward-outline"}
          style={{
            color: Colors.white,
          }}
          size={20}
        />
        <Text style={[styles.title]}>{title}</Text>
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {expanded ? children : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.itemBackground,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.white,
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: Colors.itemBackground,
  },
  parentHr: {
    height: 1,
    color: Colors.white,
    width: "100%",
  },
  child: {
    backgroundColor: Colors.lightGray,
    padding: 16,
  },
});

export default Accordion;
