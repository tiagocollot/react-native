import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const EditScreen = ({ navigation }) => {
  // console.log(navigation);
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((blogPost) =>
    blogPost.id === id
  );

  //! */ Code was refactored (Supposed to Delete this part after creating the BlogPostForm)
  // const [title, setTitle] = useState(blogPost.title);
  // const [content, setContent] = useState(blogPost.content);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
       editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );


    //! */ Code was refactored (Supposed to Delete this part after creating the BlogPostForm)
    // ( <View>
    //   <Text>Edit Title:</Text>
    //   <TextInput value={title} onChangeText={(newTitle) => setTitle(newTitle)} />
    //   <Text>Edit Content:</Text>
    //   <TextInput value={content} onChangeText={(newContent) => setContent(newContent)} />
    // </View>
  // );

};



const styles = StyleSheet.create({});

export default EditScreen;
