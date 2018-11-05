/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ToastAndroid, TextInput} from 'react-native';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";

export default class App extends Component{
  render() {
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card>
          <FormLabel>E-mail</FormLabel>
          <FormInput placeholder="Digite seu e-mail" />
          <FormLabel>Senha</FormLabel>
          <FormInput secureTextEntry placeholder="Digite sua senha" />
    
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="Entrar"
            onPress={() => {
              this.props.navigation.navigate("Menu");
            }}
          />
        </Card>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
