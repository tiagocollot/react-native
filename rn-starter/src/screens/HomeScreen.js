// 1.Check this code and Compare to Code N.2

import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // console.log(props)
  // console.log(props.navigation)

  return (
    <View>
      <Text style={styles.text} > Welcome this ShowRoom App </Text>
      <Button
      // onPress={() => console.log('Components Button Pressed')}
        onPress={() => navigation.navigate('Components')}
        title="Go To Components Demo"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Demo"
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go to Square Demo"
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go to Text Demo"
      />
      <Button
        onPress={() => navigation.navigate('Password')}
        title="Go to Password Demo"
      />
      <Button
        onPress={() => navigation.navigate('Box')}
        title="Go to Box Demo"
      />
      <Button
        onPress={() => navigation.navigate('Box2')}
        title="Go to Box View Demo"
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  },
});

export default HomeScreen;

// -------------------------------------------------------------

// 2. Code Number to Compare with N1

// import React from 'react';
// import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

// const HomeScreen = (props) => {
//   // console.log(props)
//   // console.log(props.navigation)

//   return (
//     <View>
//       <Text style={styles.text} > Welcome to the App </Text>
//       <Button
//         // onPress={() => console.log('Components Button Pressed')}
//         onPress={() => props.navigation.navigate('Components')}
//         title="Go To Components Demo"
//       />
//       <Button
//         onPress={() => props.navigation.navigate('List')}
//         title="Go to List Demo"
//       />
//       {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
//         <Text>Go to List Demo</Text>
//         <Text>Go to List Demo</Text>
//         <Text>Go to List Demo</Text>
//       </TouchableOpacity> */}
//     </View>
//   )
// };

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 30,
//   },
// });

// export default HomeScreen;


// ------------------------------------------------------
