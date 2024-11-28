import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ItemScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Starter, all menu, chappati, curry, dessert</Text>
        </View>
    )
}

export default ItemScreen

const styles = StyleSheet.create({
    container: {
        height: hp('90%'),
        width: wp('50%'),

        backgroundColor: 'yellow',
        marginLeft: wp('1%'),
        alignItems: 'center',
        justifyContent: 'center',
    }
})