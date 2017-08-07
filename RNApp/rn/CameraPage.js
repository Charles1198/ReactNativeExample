
import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation'
//使用第三方库 react-native-camera，导入方式：
//npm install react- native - camera@https://github.com/lwansbrough/react-native-camera.git --save
//react - native link react- native - camera
import Camera from 'react-native-camera';

export default class CameraPage extends Component {

  static navigationOptions = {
    title: 'Camera'
  };

  constructor(props) {
    super(props);
    this.state = {
      cameraType: Camera.constants.Type.back
    };
  }



  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          type={this.state.cameraType}
          aspect={Camera.constants.Aspect.fill}>

          <View style={{ flex: 0, flexDirection: 'row', margin: 20 }}>
            <Button title='切换摄像头' style={styles.capture} onPress={this.switchCamera.bind(this)} />
            <View style={{ flex: 1 }}></View>
            <Button title='拍照' style={styles.capture} onPress={this.takePicture.bind(this)} />
          </View>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    this.camera.capture({ metadata: options })
      .then((data) => Alert.alert("拍照成功！图片保存地址：\n" + data.path))
      .catch(err => console.error(err));
  }

  switchCamera() {
    var state = this.state;
    if (state.cameraType === Camera.constants.Type.back) {
      state.cameraType = Camera.constants.Type.front;
    } else {
      state.cameraType = Camera.constants.Type.back;
    }
    this.setState(state);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#0fff'
  }
});

