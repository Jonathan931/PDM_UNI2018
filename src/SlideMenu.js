import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon, Avatar } from 'react-native-elements'


class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View  style={{ flex: 1,   justifyContent: 'center',
             alignItems: 'center' }}>
            <Avatar

              size="xlarge"
              rounded
             
              icon={{name: 'user', type: 'font-awesome'}}
              activeOpacity={0.7}
            /> 
            <Text>Seja bem vindo, Jonathan.</Text>   
            </View>  
            <Text style={styles.sectionHeadingStyle} onPress={this.navigateToScreen('Cadastro')}>              
              {'  '}
              Lançamentos
            </Text>
            <Text style={styles.sectionHeadingStyle} onPress={this.navigateToScreen('Detail')}>
              {'  '}Consultar
            </Text>
            
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