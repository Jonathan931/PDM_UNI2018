import React, { Component } from 'react';
//import { BarChart } from 'react-native-charts-wrapper';
import { BarChartScreen } from '../components/graficos/BarChart';

import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

class MainScreen extends Component {
  render() {
    return (
      <BarChartScreen />
//       // <View style={styles.container}>

//         {/* <Text>Seja Bem vindo, Jonathan!</Text> */}
//          {/* <Button onPress={() => this.props.navigation.navigate("Detail")} title="Detail Page" /> */}
        
// {/*             
//         <BarChart style={styles.chart}
//             data={{ dataSets: [{ label: "demo", values: [{ y: 1 }, { y: 2 }, { y: 1 }] }] }}
//           /> */}
//           //  <View>/View> 
//       // </View>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chart: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MainScreen;