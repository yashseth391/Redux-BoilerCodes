import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import CounterScreen from './src/screens/CounterScreen'



const App2 = () => {
    return (


        <CounterScreen />


    )
}

export default App2

const styles = StyleSheet.create({})