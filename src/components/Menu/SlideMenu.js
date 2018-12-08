import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import {AsyncStorage} from 'react-native';
import { Icon, Avatar } from 'react-native-elements';

class SideMenu extends Component {
  
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  state ={
    nome: ''
  }

  async componentDidMount(){
    const nome = await AsyncStorage.getItem("@Money:user");
    this.setState({
      nome: nome
    });
  }

  render () {
    const {nome} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View  style={{margin: 10, marginLeft: 20}}>
              <Avatar
                size="xlarge"
                rounded
                icon={{name: 'user', type: 'font-awesome', size: 40 }}
                activeOpacity={0.7}
              /> 
            </View>  
            <View style={{margin: 10}}>
              <Text>{nome}</Text> 
            </View>  
            <View style={{margin: 10}}>
              <Text style={styles.sectionHeadingStyle} onPress={this.navigateToScreen('Cadastro')}>              
                {'  '}
                Lançamentos
              </Text>
            </View>
            <View style={{margin: 10}}>
              <Text style={styles.sectionHeadingStyle} onPress={this.navigateToScreen('Detail')}>
                {'  '}Consultar
              </Text>
            </View>
            
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>Desenvolvido por Jonathan Matheus</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;