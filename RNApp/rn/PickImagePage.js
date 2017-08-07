import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';
//使用图片选择、拍照和裁剪的库 react-native-image-crop-picker
//npm i react-native-image-crop-picker --save
//react - native link react- native - image - crop - picker
//iOS 项目中需要在 Embedded Binaries 中添加 RSKImageCropper.framework 和 QBImagePicker.framework
import ImagePicker from 'react-native-image-crop-picker';

export default class PickImagePage extends Component {
    static navigationOptions = {
        title: '图片选择'
    };

    constructor(props) {
        super(props);
        this.state = {
            img: require('../resource/bean.jpg')
        };
    }

    takePhoto() {

    }

    getPhotoFormLibrary() {

    }

    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 300, alignSelf: 'center' }} >
                    <Image source={this.state.img} />
                </View>
                <Text>{this.state.imgPath}</Text>
                <View style={{ flexDirection: 'row', height: 40, margin: 20 }}>
                    <Button title='拍照' onPress={() => {
                        ImagePicker.openCamera({
                            width: 300,
                            height: 300,
                            cropping: true
                        }).then(image => {
                            this.setState({ img: { uri: image.path, width: image.width, height: image.height }})
                        });
                    }} />
                    <View style={{ flex: 1 }} />
                    <Button title='从相册中获取' onPress={() => {
                        ImagePicker.openPicker({
                            width: 300,
                            height: 300,
                            cropping: true
                        }).then(image => {
                            this.setState({ img: { uri: image.path, width: image.width, height: image.height } })
                        });
                    }} />
                </View>
            </View>
        )
    }
}
