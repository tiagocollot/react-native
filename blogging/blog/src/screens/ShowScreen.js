import React, { useContext } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  // console.log(navigation.getParam('id'))
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

  return (
   <View>
    <Text>{blogPost.title}</Text>
    <Text>{blogPost.content}</Text>
   </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
      headerRight: () => (
          <TouchableOpacity
          onPress={() =>
            navigation.navigate('Edit', {id: navigation.getParam('id')})
          }
        >
          <MaterialCommunityIcons style={styles.icon} name="square-edit-outline" size={30} color="black" />
        </TouchableOpacity>
      ),
  };

};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
    color: 'purple',
    fontSize: 28
  }
});

export default ShowScreen;
