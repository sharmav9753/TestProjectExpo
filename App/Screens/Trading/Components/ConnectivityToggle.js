import React from "react";
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import * as Colors from "../../../Constants/Colors";
import * as Fonts from "../../../Constants/Fonts";


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: Colors.itemBackground,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    color: Colors.white,
    fontSize: Fonts.small,
    fontWeight: Fonts.bold
  }
})

const ConnectivityToggle = ({onConnect = () => {}, onDisconnect = () => {}}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onConnect}>
          <Text style={styles.text}>Connect</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onDisconnect}>
          <Text style={styles.text}>Disconnect</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

export default ConnectivityToggle;