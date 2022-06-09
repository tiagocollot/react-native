//! 1 Step
import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
//! 3 Step - TODO: Install (npm install react-native-elements)Very important!!
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer' //!4 Step
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';//! 11 Step---
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen= ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext); //! 11.1




  //!const [email, setEmail] = useState('');  ! 5 Step - Import useSate and set it |  Moved to Components
  // !const [password, setPassword] = useState('');!5 Step for password and email   |  AuthForm!!! 15 Step
  //! 2 Step -- Check at the bottom of this page --
    //console.log(state); //! 12.2 Step----

  return (
    //! 3 Step
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead!"
      />

      {/* <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
         <Text style={styles.signup}>
          Already have an account? Sign In instead.
         </Text>
        </Spacer>
      </TouchableOpacity> */}
    </View>
  );
};

//! Removes header display margin on top of the Screen---------------
SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
};

const styles = StyleSheet.create ({
  container: {
    // borderColor: 'red',
    // borderWidth: 10,
    flex: 1,
    justifyContent: 'center',
    marginBottom: 145,
    paddingHorizontal: 50,
    // paddingVertical: 140
  }
  // signup: {
  //   marginLeft: -8,
  //   fontSize: 21,
  //   color: 'blue',
  // }
});


export default SignupScreen;

/* 2 STEP <Text style={{ fontSize: 40 }}>Sign Up Screen</Text>
  <Button
      title="Go to Sign in"
      onPress={() => navigation.navigate('Signin')}
  />
  <Button
      title="Go to main flow"
      onPress={() => navigation.navigate('mainFlow')}
  /> */

    //!3---In case Paste below <View style={styles.container}></View> ln 19
      /* <Spacer>
        <Text h3>Sign Up for Tracker</Text>
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
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
        ) : null}
      <Spacer/>
      <Button title="Sign Up" onPress={() => signup({ email, password })} /> */
