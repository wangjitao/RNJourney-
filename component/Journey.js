'use strict'

import React, {Component} from 'react';
import ImageSource from '../Resource/images';
//import Icon from 'react-native-vector-icons/Ionicons'

import {
    StyleSheet,
    Text,
    View,
    Image,
    SectionList,
    Dimensions,
    TouchableOpacity,
    Alert
} from 'react-native';

const dimension = Dimensions.get('window');

export default class Journey extends Component {

    constructor(props) {
        super(props);
        this._renderSectionHeader = this._renderSectionHeader.bind(this);
        this._creatNewJourney = this._creatNewJourney.bind(this);
    }

    static navigationOptions = {
        headerTitle: '行程小助手',
    };

    componentDidMount(){

    }

    _renderSectionHeader(info) {

        let txt = info.section.weekTxt;
        let dateTxt = info.section.dateTxt;

        return(
            <View style={styles.sectionStyle}>
                <Text style={styles.sectionTxt1Style}>{txt}</Text>
                <Text style={styles.sectionTxt2Style}>{dateTxt}</Text>
                <TouchableOpacity onPress={()=>this._creatNewJourney()} style={styles.newJournalIcon}>
                    <Image source={ImageSource.addNewJourney}></Image>
                </TouchableOpacity>
            </View>
        )
    }

    _renderItem(info) {

        return(
            <View style = {styles.itemStyle}>
                <View style={{flex:1}}>
                    <Text style={styles.itemName}>{info.item.name}</Text>
                </View>
                <View style={{flex:2,flexDirection:'column'}}>
                    <Text style={styles.itemLocation}>{info.item.loaction}</Text>
                    <Text style={styles.itemDetail}>{info.item.detail}</Text>
                </View>
            </View>
        )
    }

    _separatorCom() {
        return (
            <View style={styles.separatStyle}></View>
        )
    }

    _creatNewJourney () {
        // let navigator = this.props.navigator;
        // if (navigator) {
        //     navigator.push({
        //         name:'Test',
        //         component:Login
        //     });
        // }
        const { navigate } = this.props.navigation;
        navigate('CreatJourney');
    }

    render() {

        const sections = [
                {weekTxt:'今天周一', dateTxt: '9月25日',
                    data:[
                        {name: 'Robert', loaction: '上海、南京',detail:'今天出发，明天返程'},
                        {name: 'Tony', loaction: '南昌',detail:'今天出发，回城未定'},
                        {name: 'Hellen', loaction: '天津',detail:'今天出发，周三返程'},
                        {name: '姚东', loaction: '天津、南京、盐城',detail:'今天出发，回城未定'}
                        ]
                },

                {weekTxt:'周二', dateTxt: '9月26日',
                    data:[
                        {name: 'Robert', loaction: '上海、南京',detail:'今天出发，明天返程'},
                        {name: 'Tony', loaction: '上海、南京',detail:'今天出发，明天返程'},
                        {name: 'Hellen', loaction: '上海、南京',detail:'今天出发，明天返程'},
                        {name: '姚东', loaction: '上海、南京',detail:'今天出发，明天返程'}
                    ]
                },

                {weekTxt:'周三', dateTxt: '9月27日',
                    data:[
                        {name: 'Hellen', loaction: '天津',detail:'今天出发，明天返程'},
                        {name: 'Hellen', loaction: '天津',detail:'今天出发，明天返程'},
                        {name: 'Hellen', loaction: '天津',detail:'今天出发，明天返程'},
                        {name: 'Hellen', loaction: '天津',detail:'今天出发，明天返程'}
                    ]
                },

                {weekTxt:'周四', dateTxt: '9月28日',
                    data:[
                         {name: 'Tony', loaction: '南京、盐城',detail:'今天出发，明天返程'},
                         {name: 'Tony', loaction: '南京、盐城',detail:'今天出发，明天返程'},
                         {name: 'Tony', loaction: '南京、盐城',detail:'今天出发，明天返程'},
                         {name: 'Tony', loaction: '南京、盐城',detail:'今天出发，明天返程'}
                    ]
                },
        ]

        return (

            <View style={styles.container}>

                <SectionList
                    sections={sections}
                    renderSectionHeader={this._renderSectionHeader}
                    renderItem={this._renderItem}
                    refreshing={false}
                    onRefresh={() => {
                        alert('刷新')
                    }}

                    keyExtractor={(item, index) => ("index" + index + item)}
                    onEndReached={(info) => {
                        alert("到达底部")
                    }}
                    onEndReachedThreshold={0}
                    stickySectionHeadersEnabled={true}

                    //分割线
                    ItemSeparatorComponent={this._separatorCom}

                    //section 之间的view
                    //SectionSeparatorComponent={()=><View style={{height: 20, backgroundColor: 'blue'}}></View>}

                    // ListHeaderComponent={() => <View
                    //     style={{backgroundColor: 'yellow', alignItems: 'center'}}><Text>SectionList简易通讯录</Text></View>}

                    // ListFooterComponent={() => <View
                    //     style={{backgroundColor: 'red', alignItems: 'center'}}><Text>SectionList简易通讯录尾部</Text></View>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 0,
        },
        sectionStyle: {
            flex:1,
            flexDirection:'row',
            height:50,
            alignItems:'center',
            backgroundColor:'#e9f2fe',
        },
        itemStyle:{
            flex:1,
            flexDirection:'row',
            height:100,
            alignItems:'center',
            backgroundColor:'#fff',
        },
        separatStyle:{
            height: 0.5,
            width: dimension.width,
            backgroundColor: '#dddddd',
        },
        //sectionHeader
        sectionTxt1Style: {
            fontSize:20,
            marginLeft:15,
            color:'#3b8afb',
        },
        sectionTxt2Style: {
            flex:1,
            fontSize:15,
            marginLeft:15,
            color:'#3b8afb',
        },
        newJournalIcon:{
            alignItems:'flex-end',
            marginRight:15,
        },
        //Item
        itemName:{
            fontSize:20,
            marginLeft:15,
            color:'#333333',
        },
        itemLocation:{
            flex:1,
            fontSize:20,
            marginTop:20,
            color:'#333333',
        },
        itemDetail:{
            flex:1,
            fontSize:16,
            color:'#999999',
        },
});
