// Set Two-2---------------------------------------------------

import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import { Context as BlogContext } from '../context/BlogContext';
// import { Context as imageContext } from '../context/ImageContext';


const IndexScreen = ({ navigation }) => {
  // console.log(props);
  // const blogPosts = useContext(BlogContext);
  // Refactored :
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect (() => {
      getBlogPosts();

      const listener = navigation.addListener('didFocus', (event) => {
        getBlogPosts();
      });

      return () => {
        listener.remove();
      };
    }, []);


  return (
    <View>
      {/* Refactored: */}
      {/* <Button title="Add Post" onPress={addBlogPost}/> */}
      {/* <Button title="Add Post" onPress={() => addBlogPost()} /> */}
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
           return (
           <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title} - {item.id}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Ionicons style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
           </TouchableOpacity>
           );
      }}
    />
    </View>
  )
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather style={styles.feather} name="plus-circle" />
        </TouchableOpacity>
      ),
  };

};


const styles = StyleSheet.create ({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderTopWidth: 1,
      // borderBottomWidth: 1,
      borderColor: 'gray'

    },
    title: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
      // paddingLeft: 6
    },
    icon: {
      fontSize: 24,
      color: '#6E6865',
      // paddingRight: 6
    },
    feather: {
      marginRight: 10,
      color: 'purple',
      fontSize: 28
    }
});

export default IndexScreen;
