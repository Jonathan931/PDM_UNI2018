import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

import { StackNavigator } from  'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import MainScreen from "./pages/MainScreen";
import DetailScreen from "./pages/lancamento/DetailScreen";
import CadastroScreen from "./pages/lancamento/Cadastro";
import App from "./index";

const stackNav = StackNavigator({
  Main : {
    screen: App,
    navigationOptions: ({navigation}) => ({
      title: "Money Helper",
    })     
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({navigation}) => ({
      title: "Money Helper - Consultar",
    })     
  },
  Menu : {
    screen: MainScreen,
    navigationOptions: ({navigation}) => ({
      title: "Money Helper",
      headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                    <IOSIcon name="ios-menu" size={30} />
                  </TouchableOpacity>
      ),
      headerStyle: { }
    })
  },
  Cadastro:{
    screen: CadastroScreen,
    navigationOptions: ({navigation}) => ({
      title: "Money Helper - Cadastro",
    })     
  }
});

export default stackNav;