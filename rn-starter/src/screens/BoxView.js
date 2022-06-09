import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const BoxView = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}/>
      <View style={styles.viewTwoParent}>
        <View style={styles.viewTwoStyle}/>
      </View>
      <View style={styles.viewThreeStyle}/>

    </View>
  )
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 602,
    // height: 170

  },
  viewOneStyle: {
    borderWidth: 3,
    borderColor: 'purple',
    fontWeight: 'bold',
    backgroundColor: "red",
    padding: 20,
    height:80,
    width:100
  },
  viewTwoStyle: {
    borderWidth: 3,
    borderColor: 'purple',
    fontWeight: 'bold',
    // top: 100,
    // alignSelf: 'flex-end',
    backgroundColor: "green",
    padding: 20,
    height: 80,
    width: 100
  },
  viewTwoParent: {
    height: 165,
    justifyContent: 'flex-end',

  },
  viewThreeStyle: {
    borderWidth: 3,
    borderColor: 'purple',
    fontWeight: 'bold',
    backgroundColor: "blue",
    padding: 20,
    height: 80,
    width: 100

  }
});


export default BoxView;
