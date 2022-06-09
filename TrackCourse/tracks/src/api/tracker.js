//! 9 Step ------>then go back for AuthContext for next step
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//? NGROK Every time 8h pass you need to RESET the Server and paste a NEW URL
//? To install go to the terminal |npm install -g ngrok|
//? Then run in the terminal |ngrok http 3000|

const instance = axios.create({
  baseURL: 'http://8ecb-87-196-72-24.ngrok.io'
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token} `;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
