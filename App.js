import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";
import Header from "./app/components/Header";
import Menu from "./app/components/Menu";
import MenuDetail from "./app/screen/MenuDetail";
import Checkout from "./app/screen/Checkout";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function App({ data }) {
  const [orientation, setOrientation] = useState(1);
  useEffect(() => {
    lockOrientation();

  }, []);

  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
    const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Menu data={data} />
      </View>
      <View style={styles.section2}>
        <MenuDetail data={data} />
      </View>
      {/* <View style={styles.section3}>
        <Checkout />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: hp("0.5%"),
  },
  section1: {
    flex: 0.5,
    padding: wp("0.5%"),
  },
  section2: {
    flex: 2,
    padding: wp("0.5%"),
  },
  section3: {
    flex: 0.75,
    padding: wp("0.5%"),
  },
});
