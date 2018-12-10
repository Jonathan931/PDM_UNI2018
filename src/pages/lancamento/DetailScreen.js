import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ToastAndroid
} from 'react-native';
import { ListItem, Card, FormLabel, FormInput } from 'react-native-elements';
import { ServiceLancamento } from '../../service/lancamento';

class DetailScreen extends Component {
 
  state ={
    list: []
  };

  async componentDidMount(){
    const list = await ServiceLancamento.listar().then( (response) =>{
      this.setState({
        list: response.data.content
      })
      ToastAndroid.show(JSON.stringify(response.data.content), ToastAndroid.SHORT);
    } );
  }
   

  render () {
   //
   
    const {list} = this.state;

    return (
      <View style={styles.container}>
         <Card>
          <FormLabel>Descrição</FormLabel>
          <FormInput placeholder="Pesquisar por Descrição" />
          <FormLabel>Data</FormLabel>
          <FormInput placeholder="Pesquisar por Data dd/mm/yyyy" />
         
         {
    list.map((lancamento, i) => (
      <ListItem
        key={lancamento.codigo}
        title={lancamento.descricao}
        subtitle={ lancamento.tipo === 'DESPESA' ? (lancamento.valor *-1).toFixed(2) : lancamento.valor.toFixed(2)}
      />
    ))
  }
  </Card>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      color: 'white'
      // justifyContent: 'center',
      // alignItems: 'center'
  }
});

export default DetailScreen;