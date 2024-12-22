import { Button, Image, StyleSheet, Text, View, Modal, } from 'react-native';
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ItemScreen from './ItemScreen';

const ItemDetails = ({ item }) => {

    const { title, detail, price } = item;
    const [ModalVisible, setModalVisible] = useState(false);
    const renderModal = () => (
        <Modal
            visible={ModalVisible}
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
            transparent={true}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <ItemScreen Product={item} />
                    <Button title="Done" onPress={() => setModalVisible(false)} />
                </View>
            </View>
        </Modal>
    )
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
                    <Button title="Add" onPress={() => { setModalVisible(true) }} />
                </View>
                {ModalVisible && renderModal()}
            </View>
        </View>
    );
};

export default ItemDetails;

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
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end', // Align items to the bottom
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContainer: {
        width: wp('90%'), // 50% of screen width
        height: hp('25%'), // 60% of screen height
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4, // Ensure the modal touches the bottom
    },
});