//! 1 Step
import React, { useContext} from 'react';
import { View, StyleSheet , Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
        <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        text="Don't have an account?        Go back to Sign Up."
        routeName="Signup"
      />
    </View>
  );
};


SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create ({
  container : {
    // borderColor: 'red',
    // borderWidth: 10,
    flex: 1,
    justifyContent: 'center',
    marginBottom: 145,
    paddingHorizontal: 50,
    // paddingVertical: 140
  }
});

export default SigninScreen;

{/* <NavigationEvents onWillFocus={clearErrorMessage} */}
