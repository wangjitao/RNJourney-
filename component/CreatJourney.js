
import React,{Component} from 'react';

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

export default class CreatJourney extends Component {

    constructor(proper){
        super(proper)
    }

    static navigationOptions = {
        headerTitle: '新建行程',
        headerRight: (
            <Text style={{paddingRight:5, fontSize:20, color:'white'}} onPress={this._createFinished}>完成</Text>
        ),
    }

    _createFinished:{

    };

    render () {
        return(
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 0,
        height:dimension.height,
        width:dimension.width,
        backgroundColor:'yellow',
    },

    rightItemTitle:{
        paddingRight:5,
        fontSize:20,
        color:'white',
    }

})