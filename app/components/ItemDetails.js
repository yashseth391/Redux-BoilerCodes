import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ItemDetails = ({ title, detail, price }) => {

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/dal_makhani.jpeg')} style={styles.image}
            />
            <View>
                <Text style={styles.titleText}>{title}</Text>
                <Text>{detail}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.priceText}>₹{price}</Text>
                    <Button title="Add" />
                </View>

            </View>
        </View>
    )
}

export default ItemDetails

const styles = StyleSheet.create({
    container: {

        width: wp('53%'),
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        margin: wp('2%'),
    },
    image: {
        height: hp('20%'),
        width: wp('40%'),

    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    priceText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})