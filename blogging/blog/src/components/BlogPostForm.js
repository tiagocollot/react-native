import React, { useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
  <View>
    <Text style={styles.label}>Enter Title:</Text>
    <TextInput
      style={styles.input}
      value={title}
      onChangeText={(text) => setTitle(text)}
    />
    <Text style={styles.label}>Enter Content:</Text>
    <TextInput
    style={styles.input}
    value={content}
    onChangeText={(text) => setContent(text)}
    />
    <Button
    title="Save Blog Post"
    onPress={() => onSubmit(title, content)}
  />
  </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  }
}


const styles = StyleSheet.create({
  input: {

    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 20,
    marginRight: 40,
    height: 28,
    marginBottom: 10,
    padding: 5
  },
  label: {
    fontSize: 20,
    marginBottom:10,
    fontWeight: 'bold',
    marginLeft: 20

  }
});

export default BlogPostForm;
