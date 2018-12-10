import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Card, Button, FormLabel, FormInput, CheckBox, Input } from "react-native-elements";

class CadastroScreen extends Component {
  
  state= {
    checkedReceita: true,
    checkedDespesa: false,
    descricao: '',
    data: '',
    tipo: '',
  }

  render () {
    return (
      <View style={styles.container}>
         <Card>
          <FormLabel>Descrição</FormLabel>
          <FormInput placeholder="Descrição do Lançamento" />
          <FormLabel>Data</FormLabel>
          <FormInput placeholder="dd/mm/yyyy" />
          <FormLabel>Tipo</FormLabel>
        <CheckBox
          title='Receita'
          checked={this.state.checkedReceita}
          onPress={this.handleReceita}
        />

        <CheckBox
          title='Despesa'
          checked={this.state.checkedDespesa}
          onPress={this.handleDespesa}
        />
        <FormLabel>Valor</FormLabel>
        <FormInput type='Number' placeholder="R$ 0.00" />
    
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="Salvar"
            onPress={() => {
              this.props.navigation.navigate("Menu");
            }}
          />
        </Card>
      </View>
    );
  }

  handleReceita = () =>{
    this.setState({
      checkedDespesa: false, 
      checkedReceita: true
    })
  }

  handleDespesa = () =>{
    this.setState({
      checkedDespesa: true, 
      checkedReceita: false
    })
  }
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center'
  }
});

export default CadastroScreen;