import { StyleSheet, View, FlatList, Text } from 'react-native'
import React from 'react'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Box from './Box';
const DATA = [
    {
        id: 1,
        title: 'All Menu',
        Number: 132,

    },
    {
        id: 2,
        title: 'chappati',
        Number: 25,

    },
    {
        id: 3,
        title: 'Biryani',
        Number: 25,

    },
    {
        id: 4,
        title: 'Pulao',
        Number: 25,

    },
    {
        id: 5,
        title: 'Karahi',
        Number: 25,

    },
    {
        id: 6,
        title: 'Kabab',
        Number: 25,

    },
    {
        id: 7,
        title: 'Burger',
        Number: 25,

    },
    {
        id: 8,
        title: 'Pizza',
        Number: 25,

    },
    {
        id: 9,
        title: 'Pasta',
        Number: 25,

    },
    {
        id: 10,
        title: 'Roll',
        Number: 25,

    },
    {
        id: 11,
        title: 'Sandwich',
        Number: 25,

    },
    {
        id: 12,
        title: 'Beverages',
        Number: 25,

    },
    {
        id: 13,
        title: 'Desserts',
        Number: 25,

    },
    {
        id: 14,
        title: 'Salad',
        Number: 25,

    },
    {
        id: 15,
        title: 'Soup',
        Number: 25,

    },
    {
        id: 16,
        title: 'Fast Food',
        Number: 25,

    },
    {
        id: 17,
        title: 'Chinese',
        Number: 25,

    },
    {
        id: 18,
        title: 'Italian',
        Number: 25,

    },
    {
        id: 19,
        title: 'Pakistani',
        Number: 25,

    },
    {
        id: 20,
        title: 'Indian',
        Number: 25,

    },
    {
        id: 21,
        title: 'Arabic',
        Number: 25,

    },
    {
        id: 22,
        title: 'Turkish',
        Number: 25,

    },
    {
        id: 23,
        title: 'Afghani',
        Number: 25,

    },
    {
        id: 24,
        title: 'Iranian',
        Number: 25,
    }

]
const Menu = () => {

    const renderItem = ({ item }) => {
        return (
            <Box name={item.title} number={item.Number} />
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Menu</Text>
            </View>
            <View style={styles.container} >
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    header: {


    },
    headerText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: hp('5%'),
        color: "grey",
        fontWeight: 'bold',
    }

})