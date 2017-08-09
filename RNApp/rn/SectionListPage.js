
import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  Alert,
  ActivityIndicator
} from 'react-native';

export default class SectionListPage extends Component {
  constructor(porps) {
    super(porps);
    this.state = {

    }
  }

  static navigationOptions = {
    title: 'SectionList'
  }

  //item
  renderItem = (item) => {
    var text = '第' + (item.index + 1) + '个'
    return <Text style={{ flex: 1, height: 60, textAlign: 'center' }} onPress={() => { Alert.alert('press item ' + (item.index + 1)) }}>{text}</Text>
  }

  renderItem1 = (item) => {
    var text = '第' + (item.index + 1) + '个'
    return (
      <View style={{ backgroundColor: '#c55' }}>
        <Text style={{ flex: 1, height: 60, textAlign: 'center' }} onPress={() => { Alert.alert('press item ' + (item.index + 1)) }}>{text}</Text>
      </View>
    )
  }

  renderItem2 = (item) => {
    var text = '第' + (item.index + 1) + '个'
    return (
      <View style={{ backgroundColor: '#5c5' }}>
        <Text style={{ flex: 1, height: 60, textAlign: 'center' }} onPress={() => { Alert.alert('press item ' + (item.index + 1)) }}>{text}</Text>
      </View>
    )
  }

  renderItem3 = (item) => {
    var text = '第' + (item.index + 1) + '个'
    return (
      <View style={{ backgroundColor: '#55c' }}>
        <Text style={{ flex: 1, height: 60, textAlign: 'center' }} onPress={() => { Alert.alert('press item ' + (item.index + 1)) }}>{text}</Text>
      </View>
    )
  }

  sectionHeader = (item) => {
    var text = 'Section' + (item.section.key)
    return (
      <View style={{ height: 20, backgroundColor: '#aaa' }}>
        <Text style={{ flex: 1, height: 60, textAlign: 'center' }}>{text}</Text>
      </View>
    )
  }

  //分割线
  separator = () => {
    return <View style={{ height: 1, backgroundColor: '#aaa' }} />;
  }

  render() {

    return (
      <View style={{ flexDirection: 'row' }}>
        <SectionList
          style={{ flex: 1 }}
          renderSectionHeader={this.sectionHeader}
          renderItem={this.renderItem}
          separator={this.separator}
          sections={[
            { key: 1, data: [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }] },
            { key: 2, data: [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }] },
            { key: 3, data: [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }] }
          ]}
        />
        <View style={{ width: 10, backgroundColor: '#ccc' }} />
        <SectionList
          style={{ flex: 1 }}
          renderSectionHeader={this.sectionHeader}
          renderItem={this.renderItem}
          separator={this.separator}
          sections={[
            { renderItem: this.renderItem1, key: 1, data: [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }] },
            { renderItem: this.renderItem2, key: 2, data: [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }] },
            { renderItem: this.renderItem3, key: 3, data: [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }] }
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

