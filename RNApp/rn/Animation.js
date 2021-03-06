
import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Button,
  Animated,
  Easing
} from 'react-native';

const bean = require('../resource/bean.jpg')
const pea = require('../resource/pea.png')

export default class Animation extends Component {

  static navigationOptions = {
    title: 'Animation'
  };

  constructor(props) {
    super(props);
    this.state = {
      scaleValue: new Animated.Value(1),// 缩放
      rotateValue: new Animated.Value(0),// 旋转
      translateValue: new Animated.ValueXY({ x: 0, y: 0 }),// 平移
      fadeOutOpacity: new Animated.Value(1),// 透明度

      translatePeaValue: new Animated.ValueXY({ x: 0, y: 0 }),// 平移
      fadeOutPeaOpacity: new Animated.Value(0),// 透明度

      stopAnim: true
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 2, flexDirection: 'row', backgroundColor: 'white' }}>
          <Animated.Image
            source={bean}
            style={{
              height: 100, width: 100, alignSelf: 'center',
              opacity: this.state.fadeOutOpacity,
              transform: [
                { translateX: this.state.translateValue.x }, // x轴移动
                { translateY: this.state.translateValue.y }, // y轴移动
                { scale: this.state.scaleValue }, // 缩放
                { rotate: this.state.rotateValue.interpolate({ inputRange: [0, 360], outputRange: ['0deg', '360deg'] }) }
              ]
            }}
          />
          <Animated.Image
            source={pea}
            style={{
              height: 25, width: 25, alignSelf: 'center',
              opacity: this.state.fadeOutPeaOpacity,
              transform: [
                { translateX: this.state.translatePeaValue.x }, // x轴移动
              ]
            }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ margin: 5 }}>
            <Button onPress={() => this.reset()} title='还原' />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ margin: 5 }}>
            <Button onPress={() => this.scaleAnim()} title='缩放' />
          </View>
          <View style={{ margin: 5 }}>
            <Button onPress={() => this.rotateAnim()} title='旋转' />
          </View>
          <View style={{ margin: 5 }}>
            <Button onPress={() => this.translateAnim()} title='平移' />
          </View>
          <View style={{ margin: 5 }}>
            <Button onPress={() => this.fadeOutAnim()} title='透明度' />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ margin: 5 }}>
            <Button onPress={() => this.animSequence()} title='组合-顺序执行' />
          </View>
          <View style={{ margin: 5 }}>
            <Button onPress={() => this.animParallel()} title='组合-同时执行' />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ margin: 5 }}>
            <Button onPress={() => {
              this.state.fadeOutPeaOpacity.setValue(1);
              this.reset()
              this.state.stopAnim = !this.state.stopAnim
              this.animPea()
            }} title='豌豆射手' />
          </View>
        </View>
      </View>
    )
  }

  // 回到初始状态
  reset() {
    this.state.scaleValue.setValue(1);
    this.state.rotateValue.setValue(0);
    this.state.translateValue.setValue({ x: 0, y: 0 });
    this.state.fadeOutOpacity.setValue(1);
    this.state.translatePeaValue.setValue({ x: 0, y: 0 });
  }

  // 缩放动画
  scaleAnim() {
    this.reset()
    this.state.scaleValue.setValue(1);
    Animated.timing(this.state.scaleValue, {
      toValue: 0.6,
      duration: 1000
    }).start()
  }

  // 旋转动画
  rotateAnim() {
    this.reset()
    this.state.rotateValue.setValue(0);
    Animated.timing(this.state.rotateValue, {
      toValue: 180,
      duration: 1000
    }).start()
  }

  // 平移动画
  translateAnim() {
    this.reset()
    this.state.translateValue.setValue({ x: 0, y: 0 });
    Animated.timing(this.state.translateValue, {
      toValue: { x: 0, y: 100 },
      duration: 1000
    }).start()
  }

  // 透明度动画
  fadeOutAnim() {
    this.reset()
    this.state.fadeOutOpacity.setValue(1);
    Animated.timing(this.state.fadeOutOpacity, {
      toValue: 0.1,
      duration: 1000
    }).start()
  }

  // 顺序执行
  animSequence() {
    this.reset()
    Animated.sequence([
      Animated.timing(this.state.scaleValue, {
        toValue: 0.6,
        duration: 1000
      }),
      Animated.timing(this.state.rotateValue, {
        toValue: 180,
        duration: 1000
      }),
      Animated.timing(this.state.translateValue, {
        toValue: { x: 0, y: 100 },
        duration: 1000
      }),
      Animated.timing(this.state.fadeOutOpacity, {
        toValue: 0.1,
        duration: 1000
      })
    ]).start()
  }

  // 同时执行
  animParallel() {
    this.reset()
    Animated.parallel([
      Animated.timing(this.state.scaleValue, {
        toValue: 0.6,
        duration: 1000
      }),
      Animated.timing(this.state.rotateValue, {
        toValue: 180,
        duration: 1000
      }),
      Animated.timing(this.state.translateValue, {
        toValue: { x: 0, y: 100 },
        duration: 1000
      }),
      Animated.timing(this.state.fadeOutOpacity, {
        toValue: 0.1,
        duration: 1000
      })
    ]).start()
  }

  // 吐豆豆
  animPea() {
    if (this.state.stopAnim) {
      return
    }

    this.state.translatePeaValue.setValue({ x: 0, y: 0 });
    Animated.timing(this.state.translatePeaValue, {
      toValue: { x: 300, y: 0 },
      duration: 1000
    }).start(() => {
      this.animPea()
    })

    this.state.scaleValue.setValue(1);
    Animated.timing(this.state.scaleValue, {
      toValue: 1.1,
      duration: 100
    }).start(() => {
      this.state.scaleValue.setValue(1);
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

