import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ItemDetails = () => {
    return (
        <View style={styles.container}>
            <Text>Item Details</Text>
        </View>
    )
}

export default ItemDetails

const styles = StyleSheet.create({
    container: {
        height: hp('90%'),
        width: wp('159%'),
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    }
})