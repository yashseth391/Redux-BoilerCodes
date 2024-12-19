import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Header = () => {
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <Text>Menu ,Search a food table number and order</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    height: hp("10%"),

    alignItems: "center",
    marginRight: wp("1%"),
    marginLeft: wp("1%"),
  },
});
