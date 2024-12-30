import { StyleSheet, View, FlatList, Text } from 'react-native'
import React, { useEffect } from 'react'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Box from './Box';

const Menu = ({ data }) => {

    useEffect(() => {
        console.log("data for menu", data)
    })

    const renderItem = ({ item }) => {
        return (
            <Box name={item.category_name} number={"46"} />
        )
    }
    return (
        <View style={{ flex: 1 }}>

            <View style={styles.container} >
                <FlatList
                    data={data.categoriesData}
                    renderItem={renderItem}
                    keyExtractor={item => item.category_id}
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