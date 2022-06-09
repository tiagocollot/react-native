import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  //!Exported and pasted to BlogPostForm.js
  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

    return (
     <BlogPostForm
      onSubmit={(title, content) => {
       addBlogPost(title, content, () => navigation.navigate('Index'));
      }}
    />
  );


//!Exported and pasted to BlogPostForm.js
// return (
//    <View>
//     <Text style={styles.label}>Enter Title:</Text>
//     <TextInput
//       style={styles.input}
//       value={title}
//       onChangeText={(text) => setTitle(text)}
//     />
//     <Text style={styles.label}>Enter Content:</Text>
//     <TextInput
//      style={styles.input}
//      value={content}
//      onChangeText={(text) => setContent(text)}
//     />
//     <Button
//      title="Add Blog Post"
//      onPress={() => {
//        addBlogPost(title, content, () => {
//         navigation.navigate('Index');
//         });
//        }}
//    />
//    </View>
//   );
};

const styles = StyleSheet.create({
  //!Exported and pasted to BlogPosForm.js
  // input: {
  //   fontSize: 18,
  //   borderWidth: 1,
  //   borderColor: 'black',
  //   marginLeft: 20,
  //   marginRight: 40,
  //   height: 28,
  //   marginBottom: 10,
  //   padding: 5
  // },
  // label: {
  //   fontSize: 20,
  //   marginBottom:10,
  //   fontWeight: 'bold',
  //   marginLeft: 20

  // }
});

export default CreateScreen;
