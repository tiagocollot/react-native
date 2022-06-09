import React from 'react';
import { View , Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend#1', age: '20' },
    { name: 'Friend#2', age: '22' },
    { name: 'Friend#3', age: '23' },
    { name: 'Friend#4', age: '25' },
    { name: 'Friend#5', age: '27' },
    { name: 'Friend#6', age: '30' },
    { name: 'Friend#7', age: '32' },
    { name: 'Friend#8', age: '33' },
    { name: 'Friend#9', age: '34' },
    { name: 'Friend#10', age: '35' }

  ];

  return  (
    <FlatList
    // horizontal
    // showsHorizontalScrollIndicator = {false}
    vertical
    showsVerticalScrollIndicator = {false}
    keyExtractor={(friend)=> friend.name}

    data={friends}
    renderItem={({item}) => {
      // renderItem={(item) === { name: 'Friend #1'}
      // element === { item: { name: 'Friend #1'}, index: 0}
      return <Text style= {styles.textStyle}>
                {item.name} - Age {item.age}
            </Text>;
    }}
    />
  );
};

const styles = StyleSheet.create ({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
