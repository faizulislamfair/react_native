import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Home from './components/Home';

export default function App() {
  return (
    <View style={styles.app} >
      <Home></Home>
      <Image style={styles.logo} source={require('./images/logo.jpg')}></Image>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://img.freepik.com/free-photo/milford-sound-new-zealand-travel-destination-concept_53876-42945.jpg?w=2000',
        }}
      />
      <StatusBar style="auto" ></StatusBar>
    </View>
  )
}


const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 250,
    width: 500,
  }
})