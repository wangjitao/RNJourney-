'use strict'

import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    SectionList,
    Dimensions
} from 'react-native';

const dimension = Dimensions.get('window');

export default class Journey extends Component {

    componentDidMount(){

    }

    _renderSectionHeader(info) {

        var txt = info.section.weekTxt;
        var dateTxt = info.section.dateTxt;

        return(
            <View style={{flexDirection: 'row',height:52}}>
                <Text key={info.section.key} style={{flex:1,fontSize:20,textAlign:'center',backgroundColor:'#e9f2fe',color:'#3b8afb'}}>{txt}</Text>
                <Text key={info.section.key} style={{flex:1,fontSize:15,textAlign:'center',backgroundColor:'#e9f2fe',color:'#3b8afb'}}>{dateTxt}</Text>
                <Text key={info.section.key} style={{flex:2,fontSize:30,textAlign:'center',backgroundColor:'#e9f2fe',color:'#3b8afb'}} onPress={() => this.createNewJouter()}>+</Text>
            </View>
        )

    }

    _renderItem(info) {

        return(
            <View style = {{height:100}}>
                <Text key={info.item.title}>{info.item.name}</Text>
                <Text>{info.item.phone}</Text>
            </View>
        )

    }

    _separatorCom() {
        return (
            <View style={{height: 0.5, width: dimension.width, backgroundColor: '#797979'}}></View>
        )
    }

    render() {

        const sections = [
                {weekTxt:'今天周一', dateTxt: '9月25日', key: 's1',
                    data:[
                        {name: '用户', phone: '01234567890'},
                        {name: '用户', phone: '01234567890'},
                        {name: '用户', phone: '01234567890'},
                        {name: '用户', phone: '01234567890'}
                        ]
                },

                {weekTxt:'周二', dateTxt: '9月26日', key: 's2',
                    data:[
                        {name: '用户', phone: '01234567890'},
                        {name: '用户', phone: '01234567890'},
                        {name: '用户', phone: '01234567890'},
                        {name: '用户', phone: '01234567890'}
                    ]
                },

                {weekTxt:'周三', dateTxt: '9月27日', key: 's3',
                    data:[
                        {name: '用户', phone: '01234567890'},
                        {name: '用户', phone: '01234567890'},
                        {name: '用户', phone: '01234567890'},
                        {name: '用户', phone: '01234567890'}
                    ]
                },

                {weekTxt:'周四', dateTxt: '9月28日', key: 's4',
                    data:[
                         {name: '用户', phone: '01234567890'},
                         {name: '用户', phone: '01234567890'},
                         {name: '用户', phone: '01234567890'},
                         {name: '用户', phone: '01234567890'}
                    ]
                },
        ]









        // for (let i=0;i<7;i++){
        //     let datas = [];
        //     for(let j=0;j<7;j++){
        //         datas.push(
        //             {
        //                 name:'用户'+ i + j,
        //                 phone:'01234567890'
        //             }
        //         );
        //     }
        //
        //     sections.push({key:i,data:datas});
        //
        // }

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

    createNewJouter = () => {

    }

}

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        marginTop: 0,
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
