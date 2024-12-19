import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Menu, Search a food, table number, and order
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    height: hp("10%"),
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: wp("2%"),
  },
  text: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});
