import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Home from './components/Home';

export default function App() {

  const [name, setName] = useState('');
  const [confirm, setConfirm] = useState(false);


  const handleName = (e) => {
    setName(e.nativeEvent.text);
  }


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
      <TextInput
        placeholder='Name...'
        style={styles.input}
        onChange={handleName}
      />
      <Button title='Confirm' onPress={() => setConfirm(true)} />
      <Button
        title='Clear'
        onPress={() => {
          setConfirm(false);
          setName('');
        }}
      />
      {confirm && name}
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
  },
  input: {
    borderWidth: 1,
    borderColor: 'crimson',
    margin: 10,
  }
})