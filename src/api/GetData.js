import axios from 'axios';

import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const GetData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://192.168.29.22:3000/api/data')
            .then(response => {

                //setData(response.data);
                console.log('data is ', response.data.menuItemsData);
                // Process the data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    })
    return (
        <View>
            <Text>GetData</Text>
        </View>
    )
}

export default GetData

const styles = StyleSheet.create({})