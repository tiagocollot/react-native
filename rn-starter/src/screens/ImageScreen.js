// 1
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
// 2.
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  return(
    <View>
      <ImageDetail
        imageSource={require('../../assets/forest.jpg')}
        title="Forest"
        score={3}
      />

      <ImageDetail
        imageSource={require('../../assets/beach.jpg')}
        title="Beach"
        score={9}
       />

      <ImageDetail
        imageSource={require('../../assets/mountain.jpg')}
        title="Mountain"
        score={2}
      />
    </View>
  )
};

const styles = StyleSheet.create({});


export default ImageScreen;
