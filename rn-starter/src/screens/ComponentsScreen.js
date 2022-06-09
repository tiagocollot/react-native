// Pt 1. Importing Libraries to create components

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Tiago'
  const greeting = [1213 + ' ' + 'Hello' + ' ' + 13114]


  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with my Future!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
      <Text>{greeting}</Text>
    </View>
  );


};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50
  },
  subHeaderStyle: {
    fontSize: 70
  }
});

export default ComponentsScreen;
