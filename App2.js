import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import CounterScreen from './src/screens/CounterScreen'
import Login from './src/screens/Login'
import App from './App'
import AppNavigation from './src/navigation/AppNavigation'
import ModalTester from './app/components/ModalTester'
import GetData from './src/api/GetData'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';



const App2 = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            let value = await AsyncStorage.getItem('my-key');

            if (value !== null) {
                value = JSON.parse(value)
                setData(value);
                console.log('data2:', data);

            }
        } catch (e) {
            // error reading value
        }
    };
    const fetchData = async () => {
        try {

            const response = await axios.get('http://192.168.29.22:3000/api/data');
            if (response.data) {
                console.log('Data fetched successfully');
                setData(response.data);
                storeData(response.data);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('my-key', jsonValue);
            console.log('Data stored successfully');
        } catch (e) {
            console.error('Error storing data:', e);
        }
    };
    useEffect(() => {
        //fetchData()
        getData()


    }, [])
    return (


        <App data={data} />

    )
}

export default App2

const styles = StyleSheet.create({})