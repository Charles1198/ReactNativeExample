
import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class TabPage1 extends Component {

  render() {
    return (
      <View style={styles.container}>
       <Text>tab1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 44
  }
});


