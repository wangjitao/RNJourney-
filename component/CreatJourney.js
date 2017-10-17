import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Alert
} from 'react-native';
import Test from "./Test";

const dimension = Dimensions.get('window');

export default class CreatJourney extends Component {

    constructor(proper) {
        super(proper);
    }

    static navigationOptions = ({navigation, screenProps}) => ({
        headerTitle: '新建行程',
        headerRight: (
            <Text style={styles.rightItemTitle}
                  onPress={() => navigation.state.params.navigateRightItemPress()}>完成</Text>
        ),
    });

    componentDidMount() {
        //在static中使用this方法
        this.props.navigation.setParams({navigateRightItemPress: this._createFinished})
    }

    _createFinished() {

        Alert.alert('1111')
    }

    _renderItem(info) {

        var itemKey = info.item.key;

        if (itemKey === 'a') {
            return (
                <View style={styles.verticalStyle}>
                    <View style={styles.commontStyle}>
                        <Text>{info.item.title}</Text>
                        <Text>{info.item.detail}</Text>
                    </View>
                    <View style={styles.separatorLineStyle}></View>
                </View>
            )
        } else  {
            return (
                <View style={styles.verticalStyle}>
                    <View style={styles.commontStyle}>
                        <Text style={styles.itemTitleStyle}>{info.item.title}</Text>
                        <Text>{info.item.detail}</Text>
                    </View>
                    <View style={styles.separatorLineStyle}></View>
                </View>
            )
        }
    }

    render() {

        const data = [
            {key: 'a', title: '请输入行程安排', detail: ''},
            {key: 'b_1', title: '出发时间', detail: ''},
            {key: 'b_2', title: '返程时间', detail: ''},
            {key: 'b_3', title: '出行人', detail: ''},
        ]

        return (
            <FlatList style={styles.container}
                data={data}
                renderItem={this._renderItem}
            />
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 0,
        height: dimension.height,
        width: dimension.width,
        backgroundColor: '#e9f2fe',
    },

    rightItemTitle: {
        paddingRight: 10,
        fontSize: 20,
        color: 'white',
    },

    routingHeight: {
        height:120,
    },

    commontHeight: {
        height:80,
    },

    verticalStyle: {
        flex:1,
        flexDirection:'column',
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#fefefe',
        height:styles.commontHeight,
    },

    commontStyle:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#fefefe',
    },

    itemTitleStyle:{
        color:'#666666',
        fontSize:20,
        marginLeft:10
    },

    separatorLineStyle:{
        height:0.5,
        marginLeft:10,
        marginRight:10,
        alignItems:'flex-end',
        backgroundColor:'#dddddd',
    }
})