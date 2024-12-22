import {
    Button,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../../src/redux/features/CartSlice';

const ItemScreen = ({ Product }) => {
    // states
    const [currentItem, setCurrentItem] = useState({});
    // hooks

    const dispatch = useDispatch();
    const { cart, total } = useSelector(state => state.cart);

    // life cycle

    useEffect(() => {
        console.log('Product:', Product);
        const itemChecking = () => {
            const itemAvailable = cart?.find(value => value.id === Product.id);
            if (itemAvailable) {
                setCurrentItem(itemAvailable);
            } else {
                setCurrentItem({});
            }
        };
        itemChecking();
        console.log('currentItem:', currentItem);
    }, [cart, total]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.container} >
                <Image
                    source={require('../../assets/images/dal_makhani.jpeg')}
                    style={styles.image}
                />
                <View>
                    <Text style={styles.titleText}>{Product.title}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.priceText}>₹{Product.price}</Text>
                        {currentItem?.id === Product.id && (
                            <Pressable
                                style={styles.button}
                                onPress={() => dispatch(removeFromCart(Product))}>
                                <Text>Remove</Text>
                            </Pressable>
                        )}
                        <Pressable
                            style={styles.button}
                            onPress={() => dispatch(addToCart(Product))}>
                            <Text>Add</Text>
                        </Pressable>


                    </View>
                </View>
            </View>
        </View>
    );
};

export default ItemScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        flexDirection: 'row'
    },
    image: {
        height: hp('20%'),
        width: wp('30%'),
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    priceText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'lightcoral',
        padding: 10,
        borderRadius: 5,
    },
});