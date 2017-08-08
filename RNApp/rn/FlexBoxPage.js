
import React, {
  Component
} from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';

// 父视图属性(容器属性) ：

// flexDirection enum('row', 'column', 'row-reverse', 'column-reverse')
// flexWrap enum('wrap', 'nowrap')
// justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')
// alignItems enum('flex-start', 'flex-end', 'center', 'stretch')

// 子视图属性

// alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
// flex number


export default class FlexBoxPage extends Component {
  static navigationOptions = {
    title: 'FlexBox'
  };
  render() {
    return (
      <ScrollView>
        <View>
          <Text style={{ marginTop: 10 }}>flexDirection: 'row'</Text>
          <View style={{ flexDirection: 'row', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>2</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>3</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>4</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>flexDirection: 'row-reverse'</Text>
          <View style={{ flexDirection: 'row-reverse', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>2</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>3</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>4</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>flexDirection: 'column'</Text>
          <View style={{ flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>2</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>3</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>4</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>flexDirection: 'column-reverse'</Text>
          <View style={{ flexDirection: 'column-reverse', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>2</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>3</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>4</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>flexWrap: 'wrap'</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>2</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>3</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>4</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>5</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>6</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>7</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>flexWrap: 'nowrap'</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'nowrap', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>2</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>3</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>4</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>5</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>6</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>7</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>justifyContent: 'flex-start'</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>2</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>3</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>4</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>justifyContent: 'flex-end'</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>2</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>3</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>4</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>justifyContent: 'center'</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>2</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>3</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>4</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>justifyContent: 'space-between'</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>2</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>3</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>4</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>justifyContent: 'space-around'</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>2</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>3</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>4</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>alignItems: 'flex-start'</Text>
          <View style={{ flexDirection: 'column', alignItems: 'flex-start', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>2</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>3</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>4</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>alignItems: 'flex-end'</Text>
          <View style={{ flexDirection: 'column', alignItems: 'flex-end', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>2</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>3</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>4</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>alignItems: 'center'</Text>
          <View style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>2</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>3</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>4</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>alignItems: 'stretch'</Text>
          <View style={{ flexDirection: 'column', alignItems: 'stretch', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>2</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>3</Text>
            </View>
            <View style={{ width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>4</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>alignSelf: 'auto'</Text>
          <View style={{ flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <View style={{ alignSelf: 'auto', width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>alignSelf: 'flex-start'</Text>
          <View style={{ flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <View style={{ alignSelf: 'flex-start', width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>alignSelf: 'flex-end'</Text>
          <View style={{ flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <View style={{ alignSelf: 'flex-end', width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>alignSelf: 'center'</Text>
          <View style={{ flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <View style={{ alignSelf: 'center', width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>alignSelf: 'stretch'</Text>
          <View style={{ flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <View style={{ alignSelf: 'stretch', width: 60, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>flex</Text>
          <View style={{ flexDirection: 'row', backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ flex: 2, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>2</Text>
            </View>
            <View style={{ flex: 3, height: 30, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>3</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>Border</Text>
          <View style={{ flexDirection: 'row', backgroundColor: '#ffffff' }}>
            <View style={{ borderColor: '#671983', borderWidth: 3, width: 60, height: 60, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
            <View style={{ borderTopColor: '#671983', borderLeftColor: '#783702', borderRightColor: '#783794', borderBottomColor: '#894629', borderTopWidth: 2, borderLeftWidth: 4, borderRightWidth: 6, borderBottomWidth: 8, width: 60, height: 60, backgroundColor: '#99bb99', margin: 5 }}>
              <Text style={{ fontSize: 16 }}>1</Text>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>margin</Text>
          <View style={{ flexDirection: 'row', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 60, backgroundColor: '#99bb99', margin: 5 }}>
              <View style={{ flex: 1, backgroundColor: '#996699', margin: 10 }}>
                <Text style={{ fontSize: 16 }}>1</Text>
              </View>
            </View>
            <View style={{ width: 60, height: 60, backgroundColor: '#99bb99', margin: 5 }}>
              <View style={{ flex: 1, backgroundColor: '#996699', marginTop: 2, marginLeft: 4, marginRight: 6, marginBottom: 8 }}>
                <Text style={{ fontSize: 16 }}>2</Text>
              </View>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>padding</Text>
          <View style={{ flexDirection: 'row', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 60, backgroundColor: '#99bb99', margin: 5, padding: 10 }}>
              <View style={{ flex: 1, backgroundColor: '#996699' }}>
                <Text style={{ fontSize: 16 }}>1</Text>
              </View>
            </View>
            <View style={{ width: 60, height: 60, backgroundColor: '#99bb99', margin: 5, paddingTop: 2, paddingLeft: 4, paddingRight: 6, paddingBottom: 8 }}>
              <View style={{ flex: 1, backgroundColor: '#996699' }}>
                <Text style={{ fontSize: 16 }}>2</Text>
              </View>
            </View>
          </View>

          <Text style={{ marginTop: 10 }}>position</Text>
          <View style={{ flexDirection: 'row', backgroundColor: '#ffffff' }}>
            <View style={{ width: 60, height: 60, backgroundColor: '#99bb99', margin: 5, }}>
              <View style={{ flex: 1, backgroundColor: '#996699', position: 'absolute', top: 2, left: 4, right: 6, bottom: 8 }}>
                <Text style={{ fontSize: 16 }}>1</Text>
              </View>
            </View>
            <View style={{ width: 60, height: 60, backgroundColor: '#99bb99', margin: 5, }}>
              <View style={{ flex: 1, backgroundColor: '#996699', position: 'relative', top: 2, left: 4, right: 6, bottom: 8 }}>
                <Text style={{ fontSize: 16 }}>1</Text>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    );
  }
}
