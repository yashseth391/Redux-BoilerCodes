import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { decreament, increament } from '../redux/features/counter/counterSlice';


const CounterScreen = () => {
    // hooks
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.Value);
    console.log('🚀 ~ file: CounterScreen.js:10 ~ CounterScreen ~ count:', count);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{count}</Text>
            <Button title="Add" onPress={() => dispatch(increament())} />
            <Button title="Minus" onPress={() => { dispatch(decreament()) }} />
        </View>
    );
};

export default CounterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '10%',
        gap: 10,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
});