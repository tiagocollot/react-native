import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const BoxScreen = () =>{
 return(
   <View style={styles.viewStyle}>
     <Text style={styles.textOneStyle}>Child #1</Text>
     <Text style={styles.textTwoStyle}>Child #2</Text>
     <Text style={styles.textThreeStyle}>Child #3</Text>
   </View>
 )
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    height: 200,
    // alignItems: 'flex-end'

  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    textAlign: 'center',
    // marginVertical: 40,
    // marginHorizontal: 50,
    // padding: 10,
    fontWeight: 'bold',
    // flex: 3
    backgroundColor: "green",
    padding: 15,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    textAlign: 'center',
    // marginVertical: 40,
    // marginHorizontal: 50,
    // padding: 10,
    fontWeight: 'bold',
    // flex: 2,
    // alignSelf: 'stretch'
    position: 'absolute',
    fontSize: 18,
   // -----------------OR ...StyleSheet.absoluteFillObject-----------
   ...StyleSheet.absoluteFillObject,
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
   // -------------------------------------------------------------
     backgroundColor: "yellow",
     padding: 15,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    textAlign: 'center',
    // marginVertical: 40,
    // marginHorizontal: 50,
    // padding: 10,
    fontWeight: 'bold',
    // flex:3
    // position: 'relative',
    backgroundColor: 'silver',
    padding: 15,

  }
});


export default BoxScreen;
