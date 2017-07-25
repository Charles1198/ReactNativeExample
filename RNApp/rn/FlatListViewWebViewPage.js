
import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  WebView
} from 'react-native';

export default class FlatListViewWebViewPage extends Component {
  constructor(porps) {
    super(porps);
  }

  static navigationOptions = {
    title: 'FlatListView + WebView'
  };

  //item
  renderItem = (item) => {
    var text = '第' + (item.index + 1) + '个'
    /*
    <WebView
  automaticallyAdjustContentInsets={false}
  javaScriptEnabled={true}
  domStorageEnabled={true}
  onMessage={this.onMessage}
  style={[style, { height: this.state.height }]}
  injectedJavaScript={injectScript}
  source={source}
/>
    */
    return <WebView
      source={}  
    />
  }

  //分割线
  separator = () => {
    return <View style={{ height: 1, backgroundColor: '#aaa' }} />;
  }

  render() {
    var data = [];
    for (var i = 0; i < 5; i++) {
      data.push({ key: i });
    }

    return (
      <View >
        <FlatList
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.separator}
          data={data}
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

