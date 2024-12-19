import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Box = ({ name, number }) => {
    return (
        <View style={styles.box}>
            <Text style={styles.ItemText}>{name}</Text>
            <Text style={styles.ItemNumber}>{number} items</Text>
        </View>
    )
}

export default Box

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'grey',
        height: hp('10%'),
        width: wp('40%'),
        margin: wp('2%'),
        borderRadius: 30,
    },
    ItemText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',

    },
    ItemNumber: {
        fontSize: 20,
        textAlign: 'center',

        color: 'black',
    }
})