//! 15 STEP------------------Importing/Extracting code from SignUpScreen.js and then go back and see the upcoming steps
//! making it reusable!!

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Input} from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');  //!  Step - Import useSate and set it
  const [password, setPassword] = useState(''); //! Step for password and email

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>

      <Spacer/>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer/>
      <Input
        secureTextEntry //? Turns the password not visible/displays the dots...
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
      <Text style={styles.errorMessage}>
        {errorMessage}
      </Text>
      ) : null}
      <Spacer/>
      <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 21,
  }
});

export default AuthForm;
