
import React, {
  Component
} from 'react';
import {
  View,
  Text
} from 'react-native';


export default class FlexBoxTest extends Component {

  render() {
    return (
      <View style={{ flexDirection: 'row',  flexWrap:'wrap', backgroundColor: '#eeeeee', margin: 20 }}>
        <View style={{ width: 60, height: 60, backgroundColor: '#99bb99', margin: 5 }}>
          <Text style={{ fontSize: 16 }}>1</Text>
        </View>
        <View style={{ width: 60, height: 60, backgroundColor: '#99bb99', margin: 5 }}>
          <Text style={{ fontSize: 16 }}>2</Text>
        </View>
        <View style={{ width: 60, height: 60, backgroundColor: '#99bb99', margin: 5 }}>
          <Text style={{ fontSize: 16 }}>3</Text>
        </View>
        <View style={{ width: 60, height: 60, backgroundColor: '#99bb99', margin: 5 }}>
          <Text style={{ fontSize: 16 }}>4</Text>
        </View>
        <View style={{ width: 60, height: 60, backgroundColor: '#99bb99', margin: 5 }}>
          <Text style={{ fontSize: 16 }}>5</Text>
        </View>
        <View style={{ width: 60, height: 60, backgroundColor: '#99bb99', margin: 5 }}>
          <Text style={{ fontSize: 16 }}>6</Text>
        </View>
        <View style={{ width: 60, height: 60, backgroundColor: '#99bb99', margin: 5, alignSelf:'flex-end' }}>
          <Text style={{ fontSize: 16 }}>7</Text>
        </View>
      </View>
    );
  }
}
