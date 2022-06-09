// // Step Three-3---------------------------------------------------

// import React, { useState } from 'react';

// const BlogContext = React.createContext ();

//  export const BlogProvider = ( {children}) => {
//   // const blogPosts = [{ title: 'Blog Post #1' }, { title: 'Blog Post #2' }, { title: 'Blog Post #3' }];
//   const [blogPosts, setBlogPosts] = useState([]);

//   // Helper Function
//   const addBlogPost = () => {
//     setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
//   }
//  // const editBlogPost = () => {} // Display in the EditScreen
//  // const deleteBlogPost = () => {} // Display in the DeleteScreen

//  return (
//   <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//     {children}
//   </BlogContext.Provider>
//  )
// };

// export default BlogContext;

// Refactored Code:---------------------------------------------------------------------------------

import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';


const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'edit_blogpost':
      //!Ternary Expression
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id
        ? action.payload
        : blogPost;
      });
      // ?Normal Expression
      //   return state.map((blogPost) => {
      //   if (blogPost.id === action.payload.id) {
      //   return action.payload;
      // } else {
      //   return blogPost;
      // }
      // });
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    // case 'add_blogpost':
    //   return [
    //     ...state,
    //      {
    //        id: Math.floor(Math.random() * 99999),
    //        title: action.payload.title,
    //        content: action.payload.content
    //      }
    //       //title: `Blog Post #${state.length + 1}` }
    //     ];
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts')
    // !response.data === [{}, {}, {}] Our response is going to be an array of objects
    dispatch({ type: 'get_blogposts', payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });
    //!Code with no jsonserver
      // dispatch({ type: 'add_blogpost', payload: { title, content } });
      if (callback) {
        callback();
      }

    // !dispatch({ thingTODO: 'add_blogpost', idOfPosToAdd: { title: title, content: content } });
    // !dispatch({ thingTODO: 'add_blogpost' });
  };
};

const deleteBlogPost = (dispatch) => {
  return  async id => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch ({ type: 'delete_blogpost', payload: id });
    // !dispatch ({ thingToDo: 'delete_blogpost', idOfPostToDelete: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({
      type: 'edit_blogpost',
      payload: {id: id, title, content}
    });
    if (callback) {
      callback()
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
   //!-- [] Empty array OR
  //![{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }]
);
