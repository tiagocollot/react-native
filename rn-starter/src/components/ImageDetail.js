// 2.
//  2.1 Refactored Code
// import React from 'react';
// import { Text, StyleSheet, View, Image } from 'react-native';

// const ImageDetail = (props) => {
//   // console.log(props);
//   return(
//     <View>
//       <Image source={props.imageSource} />
//       <Text>{props.title}</Text>
//       <Text>Image Score - {props.score}</Text>
//     </View>
//   )
// };
       //                                            ;......._
      //|´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´| Pistol|
      //|---------------------------------------------------;
      //|--------------------------------------------------;
      //| const styles = StyleSheet.create({
      // |  textStyle: {
      // | fontSize: 10
      // | }
      // });


// export default ImageDetail;

// -------------------------------------------------------------------------------

//    2.1 Refactored Code

// ----------------------------------------------------------------------------
import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, score }) => {
  // console.log(props);
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 10
  }
});


export default ImageDetail;
