
import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  ActivityIndicator
} from 'react-native';

export default class FlatListPage extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      hasMore: true,
      footText: '正在加载',
      data: []
    }
  }

  static navigationOptions = {
    title: 'FlatList'
  };

  //item
  renderItem = (item) => {
    var text = '第' + (item.index + 1) + '个'
    return <Text style={{ flex: 1, height: 60, textAlign: 'center' }} onPress={() => { Alert.alert('press item ' + (item.index + 1)) }}>{text}</Text>
  }

  //分割线
  separator = () => {
    return <View style={{ height: 1, backgroundColor: '#aaa' }} />;
  }

  header = () => {
    return <Text style={{ flex: 1, height: 60, backgroundColor: '#ddd', textAlign: 'center' }}>这是头部，下拉可以刷新</Text>;
  }

  footer = () => {
    return (
      this.state.hasMore ?
        (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd', height: 60 }}>
          <ActivityIndicator
            animating={this.state.animating}
            size='small'
          />
          <Text>正在加载</Text>
        </View>
        )
        :
        (
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd', height: 60 }}>
            <Text>加载完毕</Text>
          </View>
        )
    )
  }

  render() {
    for (var i = 0; i < 20; i++) {
      this.state.data.push({ key: i });
    }

    return (
      <View >
        <FlatList
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.separator}
          ListHeaderComponent={this.header}
          ListFooterComponent={this.footer}
          data={this.state.data}

          //滑动到（1 / data.length）的位置会触发 onEndReached 方法
          onEndReachedThreshold={1 / this.state.data.length}
          onEndReached={(info) => {
            var lastCount = this.state.data.length
            if (lastCount < 60) {
              for (var i = 0; i < 20; i++) {
                this.state.data.push({ key: i + lastCount });
              }
            } else {
              this.state.hasMore = false
            }
          }}

          refreshing={false}
          onRefresh={() => {
            this.state.data.length = 0
            for (var i = 0; i < 20; i++) {
              this.state.data.push({ key: i });
            }
            this.state.hasMore = true
          }}
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

