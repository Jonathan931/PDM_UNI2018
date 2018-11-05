import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';

export class BarChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      legend: {
        enabled: true,
        textSize: 14,
        form: 'SQUARE',
        formSize: 20,
        xEntrySpace: 10,
        yEntrySpace: 5,
        formToTextSpace: 5,
        wordWrapEnabled: true,
        maxSizePercent: 0.5
      },
      data: {
        dataSets: [{
          values: [{y: 100.00}, {y: 105.00}, {y: 102.00},
             {y: 110.00}, {y: 114.00}, {y: 109.00}, {y: 105.00}, {y: 99.00}, {y: 95.00}],
          label: 'Balanço Mensal',
          config: {
            color: processColor('teal'),
            barShadowColor: processColor('lightgrey'),
            highlightAlpha: 90,
            highlightColor: processColor('red'),
          }
        }],

        config: {
          barWidth: 0.7,
        }
      },
      highlights: [{x: 3}, {x: 6}],
      xAxis: {
        valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        granularityEnabled: true,
        granularity : 1,
      }
    };
  }

  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null})
    } else {
      this.setState({...this.state, selectedEntry: (entry.data ? entry.data.y : 0.00)})
    }

    console.log(event.nativeEvent)
  }


  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height:80, alignItems: 'center', top: 50,  fontSize: 20}}>
          <Text style={{ fontSize: 20}}> Balanço Financeiro</Text>
          <Text> {!!this.state.selectedEntry ? (`Caixa Mensal: ${this.state.selectedEntry}`) : (`Caixa Total: 100.00`)}</Text>
        </View>


        <View style={{height:200, top: 100}}>
          <BarChart
            style={styles.chart}
            data={this.state.data}
            xAxis={this.state.xAxis}
            animation={{durationX: 2000}}
            legend={this.state.legend}
            gridBackgroundColor={processColor('#ffffff')}
            visibleRange={{x: { min: 5, max: 5 }}}
            drawBarShadow={false}
            drawValueAboveBar={true}
            drawHighlightArrow={true}
            onSelect={this.handleSelect.bind(this)}
            highlights={this.state.highlights}
            onChange={(event) => console.log(event.nativeEvent)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});

