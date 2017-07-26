
import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  Animated
} from 'react-native';

const bean = require('../resource/bean.jpg')

export default class Animation extends Component {

  static navigationOptions = {
    title: 'Animation'
  };

  constructor(props) {
    super(props);
    this.state = {
      // bounceValue: new Animated.Value(1),//缩放
      // rotateValue: new Animated.Value(0),//旋转
      // translateValue: new Animated.Value({ x: 0, y: 0 }),//平移
      // fadeOutOpacity: new Animated.Value(1)//透明度
      bounceValue: new Animated.Value(1),//缩放
      rotateValue: new Animated.Value(0),//旋转
      translateValue: new Animated.Value({ x: 0, y: 0 }),//平移
      fadeOutOpacity: new Animated.Value(1)//透明度
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{ flex: 1, height: 200 ,
          opacity: this.state.fadeOutOpacity
        }}>
          <Image source={bean} style={{ height: 100, width: 100, alignSelf: 'center' }} />
        </Animated.View>
        <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
          <View style={{ margin: 5 }}>
            <Button onPress={this.bounceAnim} title='缩放' />
          </View>
          <View style={{ margin: 5 }}>
            <Button onPress={this.rotateAnim} title='旋转' />
          </View>
          <View style={{ margin: 5 }}>
            <Button onPress={this.translateAnim} title='平移' />
          </View>
          <View style={{ margin: 5 }}>
            <Button onPress={this.fadeOutAnim} title='透明度' />
          </View>
        </View>
      </View>
    );
  }

  //缩放动画
  bounceAnim() {
    Animated.timing(this.state.bounceValue, {
      toValue: 0.5,
      duration: 1000
    }).start()
  }

  //旋转动画
  rotateAnim() {

  }

  //平移动画
  translateAnim() {

  }

  //透明度动画
  fadeOutAnim() {
    Animated.timing(this.state.fadeOutOpacity, {
      toValue: 0.5,
      duration: 1000
    }).start()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

