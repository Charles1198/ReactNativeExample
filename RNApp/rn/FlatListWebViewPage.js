
import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  WebView,
  Platform
} from 'react-native';
//使用第三方库 react-native-autoheight-webview，导入方式：
//npm install react- native - autoheight - webview--save
//react-native link react-native-autoheight-webview
import AutoHeightWebView from 'react-native-autoheight-webview';

export default class FlatListWebViewPage extends Component {
  constructor(porps) {
    super(porps);
  }

  static navigationOptions = {
    title: 'FlatListView + WebView'
  };

  html1 = '<p style="font-weight: 400;font-style: normal;font-size: 21px;line-height: 1.58;letter-spacing: -.003em;">Tags are great for describing the essence of your story in a single word or phrase, but stories are rarely about a single thing. <span style="background-color: transparent !important;background-image: linear-gradient(to bottom, rgba(146, 249, 190, 1), rgba(146, 249, 190, 1));">If I pen a story about moving across the country to start a new job in a car with my husband, two cats, a dog, and a tarantula, I wouldn’t only tag the piece with “moving”. I’d also use the tags “pets”, “marriage”, “career change”, and “travel tips”.</span></p>'

  html2 = '<p style="font-weight: 400;font-style: normal;font-size: 21px;line-height: 1.58;letter-spacing: -.003em;">Tags are great for describing the essence of your story in a single word or phrase, but stories are rarely about a single thing.</p>'

  //item
  renderItem = (item) => {
    var text = (item.index % 2 == 0) ? this.html1 : this.html2
    // if (Platform.OS == 'android') {
    //   return <WebView source={{ html: text }} />
    // } else {
      return <AutoHeightWebView source={{ html: text }} />
    // }
    
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

