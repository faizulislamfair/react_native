import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
    return (
        <View>
            <Text style={styles.h1}>Ataraxia</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    h1: {
        color: 'red',
        fontSize: 30
    }
})