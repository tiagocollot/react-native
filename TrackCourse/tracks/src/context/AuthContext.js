//! 7 Step ------------>After building this you go to App.js AuthProvider
// import { AsyncStorage } from 'react-native'; //!13
import AsyncStorage from '@react-native-async-storage/async-storage';//! 13
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"; //! 10 Step
import { navigate } from '../navigationRef'; //!16

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':                                      //!12.1 Step ---
      return { ...state, errorMessage: action.payload }; //!12.1 Step ---
    case 'signin':
      return { errorMessage: '', token: action.payload }; //!14
     case 'clear_error_message':
       return { ...state, errorMessage: '' };
      case 'signout':
        return { token: null, errorMessage:'' };
    default:
    return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if(token) {
    dispatch ({ type: 'signin', payload: token });
    navigate ('TrackList');
  } else {
    navigate('Signup');
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

//! 8 Step --- SignUP ---
 //? every time we call dispatch react calls the authReducer function
  //?1 - make api request to sign up with that email and password--
  //?1.1 -- install axios on terminal |npm install axios| and go to tracker.js
  //? if we sign up, modify our state, and say that we are authenticated
  //? if signup fails, we probably need to reflect an error message
  // Quick Example
  // const add = (a + b) => {
  //   return a + b;
  // } is the same as
  // const add = (a + b) => a + b;

const signup = (dispatch) => async ({ email, password } ) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem('token', response.data.token); //!13
      dispatch({ type: "signin", payload: response.data.token }); //!14
      // console.log(response.data);
     //!navigate to main flow
     navigate('TrackList');
    } catch (err) {
       //10.1 Step ---> Go to Sign Up Screen
      // console.log(err);
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      });
    }
  };
// !8.1 Step --- SignIN ---
const signin = (dispatch) => async ({ email, password }) => {
    //Try to Sign in with that email and password
    //Handle success by updating state
    // Handle failure by showing an error message
    try {
       const response = await trackerApi.post("/signin", { email, password });
       await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: "signin", payload: response.data.token });
        navigate('TrackList');
     } catch (err) {
      //  console.log(err);
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in',
      });
    }
  };

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('loginFlow');

};


//! 7 Step
export const {Provider, Context} = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin  }, //! 8.2 Step ---
  { token: null, errorMessage: '' } //!13
);

//----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
  // { isSignedIn: false, errorMessage:'' } //?7
// //! 7 Step ------------>After building this you go to App.js AuthProvider
// // import { AsyncStorage } from 'react-native'; //!13
// import AsyncStorage from '@react-native-async-storage/async-storage';//! 13
// import createDataContext from "./createDataContext";
// import trackerApi from "../api/tracker"; //! 10 Step

// const authReducer = (state, action) => {
//   switch (action.type) {
//     case 'add_error':                                      //!12.1 Step ---
//       return { ...state, errorMessage: action.payload }; //!12.1 Step ---
//     case 'signup':
//       return { errorMessage: '', token: action.payload }; //!14
//     default:
//     return state;
//   }
// };
// //! 8 Step --- SignUP ---
// const signup = (dispatch) => {  //? every time we call dispatch react calls the authReducer function
//   return async ({ email, password }) => {
//     //?1 - make api request to sign up with that email and password--
//     //?1.1 -- install axios on terminal |npm install axios| and go to tracker.js
//     try {
//       const response = await trackerApi.post('/signup', { email, password });
//       await AsyncStorage.setItem('token', response.data.token); //!13
//       dispatch({ type: 'signup', payload: response.data.toke }); //!14
//       //console.log(response.data);
//     } catch (err) {
//       // console.log(err.data); //!10.1 Step ---> Go to Sign Up Screen
//       //!12 Step ---
//       dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
//     }
//     //? if we sign up, modify our state, and say that we are authenticated

//     //? if signup fails, we probably need to reflect an error message
//   };
// };
// // !8.1 Step --- SignIN ---
// const signin = (dispatch) => {
//   return ({ email, password }) => {
//     //? Try to Sign in with that email and password
//     //? Handle success by updating state
//     //? Handle failure by showing an error message
//   };
// };

// const signout = (dispatch) => {
//   return () => {
//     //? Somehow sign out
//   };
// };

// //! 7 Step
// export const {Provider, Context} = createDataContext(
//   authReducer,
//   { signin, signout, signup }, //! 8.2 Step ---
//   { token: null, errorMessage:'' } //!13
//   //{ isSignedIn: false, errorMessage:'' } //?7
// );
