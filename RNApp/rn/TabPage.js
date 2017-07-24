import React, {
    Component
} from 'react';
import {Image} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import TabPage1 from './TabPage1';
import TabPage2 from './TabPage2';

const iconGray = require('../resource/icon_gray.png')
const iconGreen = require('../resource/icon_green.png')

const MyTab = TabNavigator(
    {
        TabPage1:{
            screen: TabPage1,
            navigationOptions: ({navigation, screenProps}) => {
                title:'tab1';
                tabBarIcon: (({tintColor,focused}) => {
                    return(
                        <Image
                            source={!focused ? iconGray : iconGreen}
                            style={[{height:30,width:30 }]}
                        />
                    )
                })
            }
        },
        TabPage2:{screen: TabPage2}
    },
    {
        tabBarPosition:'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
        swipeEnabled:true, // 是否允许在标签之间进行滑动。
        animationEnabled: true, // 是否在更改标签时显示动画。
    }
)

const MyNav = StackNavigator({
    // 将TabNavigator包裹在StackNavigator里面可以保证跳转页面的时候隐藏tabbar
    MyTab:{screen:MyTab}
},{

});

export default MyNav;