//!1 Step
import React, { useContext } from 'react';
import { View, StyleSheet , Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext} from '../context/AuthContext';
import { FontAwesome} from '@expo/vector-icons';


const AccountScreen= () => {
  const { signout } = useContext(AuthContext);

  return (
    <View style={styles.button}>
      <SafeAreaView forceInset= {{ top: 'always'}}>
      <Text style={styles.header}>Account</Text>
      <Spacer/>
      <Spacer/>

      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
      </SafeAreaView>
    </View>
  )
};

AccountScreen.navigationOptions = {
  title: 'Account',
   tabBarIcon: <FontAwesome name="gear" size={30} />
}

const styles = StyleSheet.create ({
  header: {
    fontSize: 45,
    textAlign: 'center',
    marginTop: 30,

    // marginBottom: 145,
    // paddingHorizontal: 50,
  },
    button: {
      flex: 1,
    justifyContent: 'center',
    marginBottom: 145,
    paddingHorizontal: 55,
    }

});

export default AccountScreen;
