
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import TabPage from './TabPage'
import ListViewPage from './ListViewPage'

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
        <Button onPress={() => navigate('ListViewPage')} title='ListView' />
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
  ListViewPage: { screen: ListViewPage }
});

export default MyApp;
