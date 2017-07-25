
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import Login from './Login'
import TabPage from './TabPage'
import FlatListViewPage from './FlatListViewPage'
import FlatListViewWebViewPage from './FlatListViewWebViewPage'

class RNApp extends Component {
  static navigationOptions = {
    title: 'Welcome to React Native!'
  };

  //render 方法中指定了需要渲染的 UI 部分的界面
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button onPress={() => navigate('Login')} title='去登录' />
        <Button onPress={() => navigate('TabPage')} title='Tab' />
        <Button onPress={() => navigate('FlatListViewPage')} title='FlatListView' />
        <Button onPress={() => navigate('FlatListViewWebViewPage')} title='FlatListView + WebView' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

const MyApp = StackNavigator({
  RNApp: { screen: RNApp },
  Login: { screen: Login },
  TabPage: { screen: TabPage },
  FlatListViewPage: { screen: FlatListViewPage },
  FlatListViewWebViewPage: { screen: FlatListViewWebViewPage }
});

export default MyApp;
