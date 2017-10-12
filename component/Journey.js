'use strict'
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    NativeModules
} from 'react-native';

var CalendarManager = NativeModules.Manager;//导入iOS端原生

export default class JourneyPage extends Component<{}> {

    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.welcome} onPress={() => this.passValueToNativeOne()}>点击往原生传字符串</Text>
                <Text style={styles.welcome} onPress={()=>this.passValueToNativeTwo()}>点击往原生传字符串+字典</Text>
                <Text style={styles.welcome} onPress={()=>this.passValueToNativeThree()}>点击往原生传字符串+日期</Text>
                <Text style={styles.welcome} onPress={()=>this.callBackOne()}>点击调原生+回调</Text>
                <Text style={styles.welcome} onPress={()=>this.callBackTwo()}>Promises</Text>
                <Text style={styles.welcome} onPress={()=>this.useNativeValue()}>使用原生定义的常量</Text>
            </View>

        );
    }

    // 传原生一个字符串
    passValueToNativeOne = () => {
        CalendarManager.addEventOne('11111111');
    }

    // 传原生一个字符串 + 字典
    passValueToNativeTwo = () => {
        CalendarManager.addEventTwo('22222', {job: 'programmer'});
    }

    // 传原生一个字符串 + 日期
    passValueToNativeThree = () => {
        CalendarManager.addEventThree('33333', 19910730);
    }

    // 传原生一个字符串 + 回调  //  给JS传值还有一种方法
    callBackOne = () => {
        CalendarManager.testCallbackEventOne(('我是RN给原生的'), (error, events) => {
            if (error) {
                console.error(error);
            } else {
                alert(events)
            }
        })
    }

    //Promise回调
    async callBackTwo() {
        try {
            var events = await CalendarManager.testCallbackEventTwo();
            alert(events)
        } catch (e) {
            console.error(e);
        }
    }

    //使用原生定义的常量
    useNativeValue = () => {
        alert(CalendarManager.ValueOne)
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
