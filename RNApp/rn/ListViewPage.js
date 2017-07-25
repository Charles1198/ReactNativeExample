
import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert
} from 'react-native';

export default class Login extends Component {
  constructor(porps) {
    super(porps);
  }

  static navigationOptions = {
    title: 'FlatList'
  };

  //item
  renderItem = (item) => {
    var text = '第' + (item.index + 1) + '个'
    return <Text style={{ flex: 1, height: 60, textAlign: 'center' }} onPress={() => { Alert.alert('press item ' + (item.index + 1))}}>{text}</Text>
  }

  //分割线
  separator = () => {
    return <View style={{ height: 1, backgroundColor: '#aaa' }} />;
  }

  header = () => {
    return <Text style={{ flex: 1, height: 60, backgroundColor: '#ddd', textAlign: 'center' }}>这是头部，下拉可以刷新</Text>;
  }

  footer = () => {
    return <Text style={{ flex: 1, height: 60, backgroundColor: '#ddd', textAlign: 'center' }}>这是尾部，滑动到最后一个item会加载更多</Text>;
  }

  render() {
    var data = [];
    for (var i = 0; i < 40; i++) {
      data.push({ key: i });
    }

    return (
      <View >
        <FlatList
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.separator}
          ListHeaderComponent={this.header}
          ListFooterComponent={this.footer}
          data={data}

          //滑动到（1 / data.length）的位置会触发 onEndReached 方法
          onEndReachedThreshold={1 / data.length}
          onEndReached={(info) => {
            Alert.alert('nothing to loadmore')
          }}

          refreshing={false}
          onRefresh={() => {
            Alert.alert('nothing to refresh')
          }}
        >
        </FlatList>
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

