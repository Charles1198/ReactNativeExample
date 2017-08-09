
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    PanResponder
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class PanResponderPage extends Component {
    static navigationOptions = {
        title: '滑动手势'
    };


panResponder = {}


    componentWillMount() {
        this.panResponder = PanResponder.create(

        )
    }

    render() {
        return (
            <View >

            </View>
        )
    }
}
