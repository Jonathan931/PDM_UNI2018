import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { ListItem, Card, FormLabel, FormInput } from 'react-native-elements'


class DetailScreen extends Component {
 
  render () {
    const list = [
      {
        name: 'Salário - Janeiro',
        subtitle: 'Receita: 1.000,00 R$'
      },
      {
        name: 'Beach Park',
        subtitle: 'Despesa: 2.000,00 R$'
      },
      {
        name: 'Beach Park',
        subtitle: 'Despesa: 2.000,00 R$'
      },
      {
        name: 'Beach Park',
        subtitle: 'Despesa: 2.000,00 R$'
      },
      {
        name: 'Beach Park',
        subtitle: 'Despesa: 2.000,00 R$'
      },
    ];
    return (
      <View style={styles.container}>
         <Card>
          <FormLabel>Descrição</FormLabel>
          <FormInput placeholder="Pesquisar por Descrição" />
          <FormLabel>Data</FormLabel>
          <FormInput placeholder="Pesquisar por Data dd/mm/yyyy" />
         
         {
    list.map((l, i) => (
      <ListItem
        key={i}
        title={l.name}
        subtitle={l.subtitle}
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