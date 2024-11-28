import { StyleSheet, View } from 'react-native'
import React from 'react'
import ItemDetails from './ItemDetails'
import ItemScreen from './ItemScreen'

const Menu = () => {
    return (
        <View style={styles.container}>
            <View style={styles.itemScreenContainer}>
                <ItemScreen />
            </View>
            <View style={styles.itemDetailsContainer}>
                <ItemDetails />
            </View>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    itemScreenContainer: {
        flex: 1, // 25% of the screen
    },
    itemDetailsContainer: {
        flex: 3, // 75% of the screen
    },
})