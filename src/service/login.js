import api from './';
import {AsyncStorage, ToastAndroid} from 'react-native';

export const ServiceLogin = {
  async login( user ){
    return await api.post('/oauth/token', user).then(  
      (response) =>{   
        const {access_token, nome} = response.data;
        api.setAuth( {access_token, nome});

      }
    );
  }
};
