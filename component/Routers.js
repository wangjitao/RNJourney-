import {StackNavigator} from 'react-navigation';
import {
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import React from 'react';
import Journey from './Journey';
import CreatJourney from './CreatJourney';
import ImageSource from '../Resource/images';
import Test from './Test';


export default JourneyApp = StackNavigator({
    Journey: {
        screen: Journey,
    },

    Test: {
        screen: Test,
    },

    CreatJourney: {
        screen: CreatJourney,
    }
}, {

    initialRouteName: 'Journey', // 默认显示界面
    navigationOptions: ({navigation, screenProps}) => ({  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)

        headerBackTitle: null,
        headerStyle: {
            backgroundColor: '#3b8afb',
        },

        headerTitleStyle: {
            fontSize: 28,
            color: 'white',
        },

        headerLeft: (
            <TouchableOpacity onPress={() => this._naviTurnBack}>
                <Image source={ImageSource.naviBackImg} style={styles.icon}></Image>
            </TouchableOpacity>
        ),

        gesturesEnabled: true,

    }),
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏

    _naviTurnBack() {
        let navigator = this.props.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            //return true;
        } else {
            //return false;
        }
    },

});

const styles = StyleSheet.create({
    icon: {
        flex: 1,
        marginLeft: 5,
    },
})