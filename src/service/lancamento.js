import api from 'axios';


import {AsyncStorage, ToastAndroid} from 'react-native';

export const ServiceLancamento = {
  
  listar: async () => {
    const token = await AsyncStorage.getItem('@Money:token');
    var config = {
      headers: {'Authorization': "bearer " + token}
    };
    
    var bodyParameters = {
     key: "value"
    }
    
    return await api.get( 
    'http://10.0.2.2:8080/lancamentos',
    bodyParameters,
    config
    );
  },

};
;
