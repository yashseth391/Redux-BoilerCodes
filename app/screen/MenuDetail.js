import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ItemDetails from '../components/ItemDetails'
const DATA = [
    {
        id: 1,
        title: 'Dhal Makhani',
        detail: 'Dhal Makhani is a popular dish from the Punjab region of the Indian subcontinent.',
        price: 250,
    },
    {
        id: 2,
        title: 'Dhal Makhani',
        detail: 'Dhal Makhani is a popular dish from the Punjab region of the Indian subcontinent.',
        price: 250,
    },
    {
        id: 3,
        title: 'Dhal Makhani',
        detail: 'Dhal Makhani is a popular dish from the Punjab region of the Indian subcontinent.',
        price: 250,
    },
    {
        id: 4,
        title: 'Dhal Makhani',
        detail: 'Dhal Makhani is a popular dish from the Punjab region of the Indian subcontinent.',
        price: 250,
    },
    {
        id: 5,
        title: 'Dhal Makhani',
        detail: 'Dhal Makhani is a popular dish from the Punjab region of the Indian subcontinent.',
        price: 250,
    },
    {
        id: 6,
        title: 'Dhal Makhani',
        detail: 'Dhal Makhani is a popular dish from the Punjab region of the Indian subcontinent.',
        price: 250,
    }
]
const MenuDetail = () => {
    const renderItem = ({ item }) => {
        return (
            <ItemDetails title={item.title} detail={item.detail} price={item.price} />
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>

            </View>
            <View style={styles.container} >
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>
        </View>
    )
}

export default MenuDetail

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    }
})