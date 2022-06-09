import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const PasswordScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text style={styles.enterPassword}>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 4 ? <Text style={ styles.passwordLenght }>Password must be at least 4 characters</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 30,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    fontSize: 20
  },
  enterPassword: {
    fontSize: 30
  },
  passwordLenght: {
    fontSize: 20
  }

});

export default PasswordScreen;
