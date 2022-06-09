import React, {useState} from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const TextScreen = () =>{
  const [name, setName] = useState('');
  return (
  <View>
    <Text style={styles.enterName}>Enter Name:</Text>
    <TextInput
    style={styles.input}
    autoCapitalize = "none"
    autoCorrect={false}
    value={name}
    onChangeText = {(newValue) => setName(newValue)}
    />
    <Text style={styles.myName}>My name is {name}</Text>
  </View>
  )}

const styles = StyleSheet.create ({
  input: {
    margin: 30,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    fontSize: 20
  },
  enterName: {
    fontSize:30
  },
  myName: {
    fontSize: 30
  }

});

export default TextScreen;
