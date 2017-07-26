
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
import FlatListPage from './FlatListPage'
import FlatListWebViewPage from './FlatListWebViewPage'
import CameraPage from './CameraPage'
import Animation from './Animation'

class RNApp extends Component {
  static navigationOptions = {
    title: 'Welcome to React Native!'
  };

  //render 方法中指定了需要渲染的 UI 部分的界面
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ margin: 5 }}>
          <Button style={styles.button} onPress={() => navigate('Login')} title='去登录' />
        </View>
        <View style={{ margin: 5 }}>
          <Button style={styles.button} onPress={() => navigate('TabPage')} title='Tab' />
        </View>
        <View style={{ margin: 5 }}>
          <Button style={styles.button} onPress={() => navigate('CameraPage')} title='Camera' />
        </View>
        <View style={{ margin: 5 }}>
          <Button style={styles.button} onPress={() => navigate('FlatListPage')} title='FlatList' />
        </View>
        <View style={{ margin: 5 }}>
          <Button style={styles.button} onPress={() => navigate('FlatListWebViewPage')} title='FlatList + WebView' />
        </View>
        <View style={{ margin: 5 }}>
          <Button style={styles.button} onPress={() => navigate('Animation')} title='Animation' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginTop: 5,
    flexDirection: 'row',
  },
  button: {
    margin: 10,
    height: 40
  }
});

const MyApp = StackNavigator({
  RNApp: { screen: RNApp },
  Login: { screen: Login },
  TabPage: { screen: TabPage },
  FlatListPage: { screen: FlatListPage },
  FlatListWebViewPage: { screen: FlatListWebViewPage },
  CameraPage: { screen: CameraPage },
  Animation: { screen: Animation }
});

export default MyApp;
