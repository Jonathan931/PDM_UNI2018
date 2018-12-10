/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet,  View, AsyncStorage, ToastAndroid} from 'react-native';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import {ServiceLogin} from './service/login';

export default class App extends Component{
  
  static navigationOptions = {
    header: null,
  };

  state = {
    email: 'admin@gmail.com',
    senha: 'admin',
    error: ''
  };

  render() {
    
    return (
      <View style={styles.container}>
          <Card style={styles.container}>
            <FormLabel>{this.state.error}</FormLabel>
            <FormLabel>E-mail</FormLabel>
            <FormInput 
              placeholder="Digite seu e-mail" 
              value={this.state.email}
              onChangeText={this.handleChangeEmail} 
              />
            <FormLabel>Senha</FormLabel>
            <FormInput 
              secureTextEntry 
              placeholder="Digite sua senha" 
              value={this.state.senha}
              onChangeText={this.handleChangeSenha}
              />
      
            <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="#03A9F4"
              title="Entrar"
              onPress={() => {
                this.logar();
              }}
            />
          </Card>
      </View>
    
    );
  }

  async componentDidMount(){
   // await AsyncStorage.removeItem("@Money:user");
   // await AsyncStorage.removeItem("@Money:token");
  }


  logar = () =>{
    const {email, senha} = this.state;
    const login = `client=angular&username=${email}&password=${senha}&grant_type=password`;
    ServiceLogin.login(login).then( 
      () =>{
        this.props.navigation.navigate("Menu");
      },
      () =>{
        this.setState({
          error: 'Login inválido, tente novamente!'
        })
        ToastAndroid.show('Login inválido, tente novamente!', ToastAndroid.SHORT);
    })
  }

  isLogado = async() =>{
    await !!AsyncStorage.getItem('@Money:token');
  }

  handleChangeEmail =( email )=>{
    this.setState({
      email
    });
  }

  handleChangeSenha =( senha )=>{
    this.setState({
      senha
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

});
