import React, { useState } from 'react';
import { View, Text, StyleSheet, Button,  } from 'react-native';

const CounterScreen = () => {
  // to do: fix this
  // let counter = 0;
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button title="Increase" onPress={() => {
        // Don't do this!!!
        // counter++;
        setCounter(counter + 1);
        console.log(counter);
      } }/>
      <Button title="Decrease" onPress={() => {
        // Don't do This!!!!!
        // counter--;
        setCounter(counter - 1);
        console.log(counter);
      }}/>
      <Text>Current Count:{counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // text: {
  //   fontSize: 30,
  // },
});

export default CounterScreen;
