import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React, { useEffect } from 'react'
import ItemDetails from '../components/ItemDetails'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../src/redux/features/ProductSlice';
import { useNavigation } from '@react-navigation/native';



const MenuDetail = ({ data }) => {
    const renderItem = ({ item }) => {
        return (
            <ItemDetails item={item} />
        )
    }
    // const dispatch = useDispatch();
    //const { products, isloading } = useSelector(state => state.products);   //products naam ke reducer se destructure

    // useEffect(() => {
    //     // dispatch(getAllProducts()); currently not getting data from API
    //     //console.log(products.products);
    // })
    useEffect(() => {
        console.log("data for menuDetails", data)
    }, [])
    return (
        <View style={{ flex: 1, marginTop: hp('2%') }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Menu</Text>
                <Button title="Continue" style={styles.btnText} />
            </View>
            <View style={styles.container} >
                <FlatList
                    data={data?.menuItemsData}
                    renderItem={renderItem}
                    keyExtractor={item => item.dish_id}
                    numColumns={3}
                />
            </View>
        </View>
    )
}

export default MenuDetail

const styles = StyleSheet.create({
    btnText: {

    },
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    header: {
        flexDirection: 'row',

        alignItems: "baseline"
    }
})