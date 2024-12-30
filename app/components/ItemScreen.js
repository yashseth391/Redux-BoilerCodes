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
        <View style={styles.mainContainer} >
            <View style={styles.container} >
                <Image
                    source={require('../../assets/images/dal_makhani.jpeg')}
                    style={styles.image}
                />
                <View style={styles.container2}>
                    <Text style={styles.titleText}>{Product.title}</Text>


                </View>

            </View>
            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.headingText}>Size</Text>
                    <View>
                        <Text>Half</Text>
                    </View>
                    <View>
                        <Text>Full</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.headingText}>Spice Level</Text>
                    <View>
                        <Text>Less Spice</Text>
                    </View>
                    <View>
                        <Text>More Spice</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>


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
    );
};

export default ItemScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: wp('5%'),
        margin: wp('2%'),
        padding: wp('2%'),
        paddingRight: hp('10%'),
    },
    container2: {
        marginRight: 20,
        marginLeft: 20
    },
    headingText: {
        fontWeight: "bold"
    },
    infoContainer: {
        backgroundColor: 'white',
        padding: wp('2%'),
        borderRadius: wp('5%'),
    },
    image: {
        height: hp('6%'),
        width: wp('10%'),
    },
    mainContainer: {
        flex: 1,
        backgroundColor: 'yellow',
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