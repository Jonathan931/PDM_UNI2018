import axios from 'axios';
import {AsyncStorage, ToastAndroid} from 'react-native';

const api = axios.create({
  baseURL:  "http://10.0.2.2:8080",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  auth: {
    username: 'angular',
    password: '@ngular0',
  },
});

api.setAuth = async ({access_token, nome}) => {

  await AsyncStorage.setItem("@Money:token", access_token);
  await AsyncStorage.setItem("@Money:user", nome);
  api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
  // ToastAndroid.show(access_token, ToastAndroid.SHORT  );
};


// api.interceptors.request.use(
//   // update config before request
//   config => config,
//   // handle request error
//   error => ToastAndroid.show(error, ToastAndroid.SHORT  )
// );


export default api;